// RSVP Form Data
export interface RSVPFormData {
  fullName: string;
  email?: string;
  adults: number;
  children: number;
  message?: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface RSVPSubmissionResponse {
  id: string;
  confirmationNumber: string;
  message: string;
}
