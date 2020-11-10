import axios from 'axios';

const instance = axios.create({
  // this is the local api in point// The API (cloud function) URL, this is good for testing
  //baseURL: 'http://localhost:5001/amz-e-commerce-full-clone/us-central1/api',
  // timeout: 5000,
});

export default instance;
