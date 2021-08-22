const buttons = document.querySelectorAll(".number")
const input = document.getElementById("scope")
const result = document.getElementById("result")
const clear = document.getElementById("clear")

buttons.forEach(
    function (button) {
        button.addEventListener(
            "click",
            function (event)  {
                input.value += event.target.innerText
            }
        )
    }
)

result.addEventListener(
  "click",
  function (event) {
      const res = eval(input.value)
      input.value = res
  }
)

clear.addEventListener(
    "click",
    function (event) {        
        input.value = ""
    }  
)