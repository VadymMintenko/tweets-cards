import axios from 'axios';

const URL = 'https://643bba9c44779455735f6a9d.mockapi.io/user/user';

export const fetchData = async () => {
  try {
    const response = await axios(URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
