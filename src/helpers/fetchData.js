export const fetchData = async ({endpoint}) => {
      const baseUrl = `https://jsonplaceholder.typicode.com/${endpoint}`;
    try {
      const res = await fetch(baseUrl);
      const data = await res.json();
      return {
        data,
        isLoadign: false
      }
    } catch (error) {
      console.error(error);
      return {
        isLoading: false
      }
    }
  };