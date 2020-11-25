import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class IndexApi {
  static async postSubmission(submission) {
    const encodedEmail = encodeURIComponent(submission.email)
    const formData = new FormData();

    formData.append("ms", submission.ms, 'ms.pdf')
    formData.append("words", submission.words, 'words.txt')
    
    const result = await axios.post(`${BASE_API_URL}/${encodedEmail}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    return result.data;
  }
}

export default IndexApi;
