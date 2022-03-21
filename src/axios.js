import axios from 'axios';

const instance = axios.create({
	// THE API (cloud function) URL
	baseURL: 'https://us-central1-clone-f433a.cloudfunctions.net/api'
	// my local url:- 'http://localhost:5001/clone-f433a/us-central1/api'
	// "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;
