import { METHOD, PATH, proxy, requests } from '../../utils/index.jsx';

export const removePostAsync = (id) => () => {
	return requests(`${proxy}${PATH.POSTS}/${id}`, METHOD.DELETE);
};
