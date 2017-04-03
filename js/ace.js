function acejs() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/chaos");
    editor.getSession().setMode("ace/mode/javascript");
    var powScript = document.createElement('script');
    powScript.innerHTML = 'function pow(x, n) {\n\tvar result = 1;\n\tfor (var i = 0; i < n; i++) {' +
            '\n\t\tresult *= x;\n\t}\n\treturn result;\n}';
    document.body.appendChild(powScript);
    var test = document.createElement('script');
    document.body.appendChild(test);
    editor.getSession().on('change', function() {
        document.body.lastChild.innerHTML = editor.getValue();
    });
}

acejs();

/*
describe("Проверка", function() {

    it("Статус задания", function() {
        assert.equal(pow(4,6), eval(currentContent));
    });

});*/
