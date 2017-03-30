function acejs1() {
    var editor = ace.edit("editor1");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/css");
    var iframe = document.querySelector('iframe');
    var doc = iframe.contentWindow.document;
    var style = doc.createElement('style');
    doc.head.appendChild(style);
    editor.getSession().on('change', function() {
        // Вывод содержимого редактора в iframe
        doc.head.lastChild.innerHTML = editor.getValue();
    });
    editor.setValue("p{\n\tfont-family:Arial;\n\tfont-size:24px;\n\tfont-style:italic;\n\t" +
    "background-color:#991BA6;\n\tcolor:white;\n}")
}

acejs1();