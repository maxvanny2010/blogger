import { ACTION_TYPE } from '../../utils/index.jsx';

export const removeComment = (commentId) => ({
	type: ACTION_TYPE.COMMENT_REMOVE,
	payload: commentId,
});
