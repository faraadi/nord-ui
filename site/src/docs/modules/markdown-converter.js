import showdown from 'showdown';

const classMap = {
	blockquote: "callout",
	// code: ""
	pre: "code-fence"
}

const bindings = Object.keys(classMap).map(key => ({
	type: 'output',
	regex: new RegExp(`<${key}(.*)>`, 'g'),
	replace: `<${key} class="${classMap[key]}" $1>`
}));

const otherBindings = [
{
	type: 'output',
	regex: new RegExp(`<code>`, 'g'),
	replace: `<code class="inline" $1>`
},
]

const converterInstance = new showdown.Converter({
	noHeaderId: false,
	extensions: [...bindings, ...otherBindings],
	emoji: true,
	tables: true
});

function markdownConverter(text) {
	return converterInstance.makeHtml(text);
}

export default markdownConverter;