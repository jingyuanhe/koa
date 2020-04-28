import request from '../utils/request';
export default {
  demo (query) {
    return request({
      url: '/',
      params: {
        userCode: query || '01287483'
      }
    });
  }
};
