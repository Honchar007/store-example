/* eslint-disable no-undef */

const CheckGaiApi = {
  async checkByLicensePlate(licensePlate) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/nomer/${licensePlate}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-Api-Key": import.meta.env.VITE_APP_API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch random trivia");
      }

      return response.json();
    } catch (error) {
      console.error("Error fetching random trivia:", error);
      return null;
    }
  },
  async checkByVin(vin) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/vin/${vin}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-Api-Key": import.meta.env.VITE_APP_API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch random trivia");
      }

      return response.json();
    } catch (error) {
      console.error("Error fetching random trivia:", error);
      return null;
    }
  },
};

export default CheckGaiApi;
