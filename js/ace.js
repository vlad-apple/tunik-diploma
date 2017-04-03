var editor = ace.edit("editor");
editor.setTheme("ace/theme/chaos");
editor.getSession().setMode("ace/mode/javascript");
/*создаем скрипт для тестируемоего кода*/
var powScript = document.createElement('script');
powScript.innerHTML = 'function pow(x, n) {\n\tvar result = 1;\n\tfor (var i = 0; i < n; i++) {' +
        '\n\t\tresult *= x;\n\t}\n\treturn result;\n}';
document.body.appendChild(powScript);
var currentContent = '';
editor.getSession().on('change', function() {
    currentContent = editor.getValue();
});
editor.setValue('describe("Проверка", function() {\n\tit("Статус задания", function() {\n\t\t' +
'assert.equal(pow(4,6), 4096);\n\t});\n})')
/*var iframe = document.querySelector('iframe');
var doc = iframe.contentWindow.document;
var mochaDiv = doc.createElement('div');
mochaDiv.id = 'mocha';
doc.body.appendChild(mochaDiv);*/


/*
describe("Проверка", function() {

    it("Статус задания", function() {
        assert.equal(pow(4,6), 544);
    });

});*/
var mochas ='';
var well = document.getElementById('well');
function startSpec() {
    if (document.getElementById('mocha')){
        mochas = document.getElementById('mocha');
        mochas.remove();
        mochas = document.createElement('div');
        mochas.id = 'mocha';
        well.appendChild(mochas);
    }
    eval(currentContent);
    mocha.run();
}


