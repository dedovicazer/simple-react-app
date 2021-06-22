import axios from 'axios';

const sendRequest = (
  type: string,
  url: string,
  bodyData: Object,
): Promise<any> => {
  const fullUrl = 'https://jsonplaceholder.typicode.com/' + url;

  const options = {
    method: type,
    url: fullUrl,
    data: bodyData,
  };

  return axios(options).then((response) => response);
};

export default sendRequest;
