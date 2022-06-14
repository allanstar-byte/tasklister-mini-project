document.addEventListener("DOMContentLoaded", () => {
            let submit = document.getElementById('#submit')
            submit.addEventListener("click", stopDefault => {
                submit.preventDefault();
                console.log(submit.target)
                let submit = document.getElementById('#submit')
                submit.addEventListener("click", stopDefault => {
                    submit.reset();
                    console.log(submit.target)


                }, true)

            });