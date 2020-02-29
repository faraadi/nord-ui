import { Converter } from 'showdown';

const converterInstance = new Converter();

export default function MarkdownConverter(text) {
	return converterInstance.makeHtml(text);
}