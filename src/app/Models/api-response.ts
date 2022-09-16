export interface ApiResponse<T> {
  /**
   * Commonly used to check if the request to the server is successfull
   */
  success: boolean;
  /**
   * The status code of response from the server
   */
  status: number;
  /**
   * The developer message sent with the response from the sever
   */
  message: string;
  /**
   * A generic object being returned from the server
   */
  data: T;
}
