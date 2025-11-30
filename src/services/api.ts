import type { RSVPFormData, ApiResponse, RSVPSubmissionResponse } from '../types';

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
      const response = await fetch(`${this.baseUrl}/rsvp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        data: result,
        message: 'RSVP submitted successfully',
      };
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit RSVP',
      };
    }
  }
}

// Export singleton instance
export const apiService = new ApiService();

// Export class for testing purposes
export default ApiService;
