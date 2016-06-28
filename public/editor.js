window.onload = function() {
	var converter = new showdown.Converter();
	var editor = document.getElementById('editor');
	var markdownArea = document.getElementById('markdown');

	var convertText = function(){
		var rawMarkdown = editor.value;

		parsedMarkdown = converter.makeHtml(rawMarkdown);
		markdownArea.innerHTML = parsedMarkdown;
	};

	editor.addEventListener('input', convertText);

	sharejs.open('home', 'text', function(err,doc){
		doc.attach_textarea(editor);
		convertText();
	});
};
