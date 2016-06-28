window.onload = function() {
	var converter = new showdown.Converter();
	var editor = document.getElementById('editor');
	var markdownArea = document.getElementById('markdown');
	var lastMD;

	var convertText = function(){
		var rawMarkdown = editor.value;
		lastMD = rawMarkdown;
		parsedMarkdown = converter.makeHtml(rawMarkdown);
		markdownArea.innerHTML = parsedMarkdown;
	};

	var watchMarkdown = function(){
		if(editor.value != lastMD){
			return convertText();
		}
		return;
	};

	editor.addEventListener('input', convertText);

	if(document.location.pathname.length > 1){
		var documentName = document.location.pathname.substring(1);
		sharejs.open(documentName, 'text', function(err,doc){
			doc.attach_textarea(editor);
			convertText();
		});
	}

	setInterval(function() {
		watchMarkdown();
	},100);
};
