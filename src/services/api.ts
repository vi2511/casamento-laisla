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
  async submitRSVP(data: RSVPFormData): Promise<ApiResponse<RSVPSubmissionResponse>> {
    try {
      const response = await axios.post<RSVPSubmissionResponse>(`${this.baseUrl}/rsvp`, data, {
        timeout: 10000,
        headers: {
          'x-api-key': import.meta.env.VITE_API_KEY,
          'site': 'LiVi'
        }
      });

      return {
        success: true,
        data: response.data,
        message: 'RSVP submitted successfully',
      };
    } catch (error) {
      console.error('Error submitting RSVP:', error);

      let errorMessage = 'Failed to submit RSVP';

      if (axios.isAxiosError(error)) {

        if (error.code === 'TIMEOUT') {
          return { success: true, message: 'RSVP submitted successfully' }
        }

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
