import { Converter } from 'showdown';
const converterInstance = new Converter();

function markdownConverter(text) {
	return converterInstance.makeHtml(text);
}

export default markdownConverter;