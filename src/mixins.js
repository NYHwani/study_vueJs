import axios from 'axios';

export default {
    methods: {
      async $api(url, method, data) {
        try {
          const response = await axios({
            method: method,
            url: url,
            data: data
          });
          return response.data;
        } catch (error) {
          console.error('API 호출 에러:', error);
          throw error;
        }
      }
    }
  };