import { ACTION_TYPE } from '../../utils/index.jsx';

export const addComment = (comment) => ({
	type: ACTION_TYPE.COMMENT_ADD,
	payload: comment,
});
