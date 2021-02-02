// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


document.addEventListener("DOMContentLoaded",
    function(){
        document.getElementsByClassName(".popup_open").addEventListener("click", function(){
            var data = "url="+document.getElementById("#url").value;
            var $form = document.getElementById("#url").parents("from");
            fetch($form.getAttribute('action'),{
                body: JSON.stringfy(data)
            })
        .then(function() {
                document.getElementsByClassName(".popup_open").classList.add("open");
                document.getElementsByClassName(".popup_inner").classList.add("open");
                document.getElementsByClassName(".popup_inner").text(data.text);
                document.getElementsByClassName(".popup_inner").before("<h1>"+data.title+"</h1>");
            })

        });
    }
)



