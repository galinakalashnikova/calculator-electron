//в переменную buttons записывается массив всех кнопок с классом number
const buttons = document.querySelectorAll(".number")
 //в переменную input записывается ссылка на текстовое поле c id=scope
const input = document.getElementById("scope")
//в переменную result записывается ссылка на кнопку "="
const result = document.getElementById("result")
//в переменную clear записывается ссылка на кнопку "C"
const clear = document.getElementById("clear")

//у массива кнопок вызываем метод forEach,
buttons.forEach(
    //на каждый элемент массива вызывается функция
    function (button) {
        //функция получает в первом аргументе элемент массива
        //на каждую кнопку вешается событие "нажатие мышью"
        button.addEventListener(
            "click",
            //когда нажмем на кнопку, то сработает эта функция
            function (event)  {
                //в значение текстового поля записывается новое значение с кнопки
                //оператор += склеивает старое значение с новым значением
                input.value += event.target.innerText
            }
        )
    }
)
//на кнопку result добавляется событие "нажатие мыши"
result.addEventListener(
  "click",
  //когда нажмем, то выполнится функция
  function (event) {
      //в переменную res запишется новый результат выполнения вычислений
      const res = eval(input.value)
      //функция eval принимает в себя строку, которую считает как javascript-код
      //данную функцию использует только для учебных проектов
      //данная функция опасна, так как может выполнить любой javascript-код

      //записываем в текстовое поле результат вычислений
      input.value = res
  }
)
//на кнопку clear добавляется событие "нажатие мыши"
clear.addEventListener(
    "click",
    //когда нажмем, то выполнится функция
    function (event) { 
        //текстовое поле очищаем       
        input.value = ""
    }  
)