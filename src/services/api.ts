import type { RSVPFormData, ApiResponse, RSVPSubmissionResponse } from '../types';
import axios from 'axios';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * API Service for wedding site
 * Handles all HTTP requests to the backend
 */
class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  /**
   * Submit RSVP form data
   * @param data - RSVP form data
   * @returns Promise with API response
   */
  async submitRSVP(data: RSVPFormData, retries = 5, delay = 2000): Promise<ApiResponse<RSVPSubmissionResponse>> {
    try {
      const response = await axios.post<RSVPSubmissionResponse>(`${this.baseUrl}/rsvp`, data, {
        timeout: 60000,
        headers: {
          'x-api-key': import.meta.env.VITE_API_KEY,
          'site': 'LaAl'
        }
      });

      return {
        success: true,
        data: response.data,
        message: 'RSVP submitted successfully',
      };
    } catch (error) {
      if (retries > 0) {
        // Retry on network errors or 5xx server errors
        if (!axios.isAxiosError(error) || !error.response || (error.response.status >= 500 && error.response.status < 600) || error.code === 'ECONNABORTED') {
          console.warn(`Tentativa falhou. Retentando em ${delay}ms... Restam ${retries} tentativas.`);
          await new Promise(resolve => setTimeout(resolve, delay));
          return this.submitRSVP(data, retries - 1, delay * 2); // Exponential backoff
        }
      }

      console.error('Error submitting RSVP:', error);

      let errorMessage = 'Failed to submit RSVP';

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
        // Handle array of validation errors if present
        if (Array.isArray(error.response?.data?.message)) {
          errorMessage = error.response?.data?.message.join(', ');
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      return {
        success: false,
        error: errorMessage,
      };
    }
  }
}

// Export singleton instance
export const apiService = new ApiService();

// Export class for testing purposes
export default ApiService;
