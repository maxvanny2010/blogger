import { ACTION_TYPE } from '../../utils/index.jsx';

export const setPostData = (postData) => ({
	type: ACTION_TYPE.SET_POST_DATA,
	payload: postData,
});
