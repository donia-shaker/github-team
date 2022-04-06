let index = 0;

let circeles = document.querySelectorAll(".circle");
let payment_container = document.querySelector(".payment-personal-info-container");
let payment_method_container = document.querySelector('.payment-method-container');
let payment_done_container = document.querySelector('.payment-done-container');

function checkstep() {
    if (index === 0) {
        index++;
    }
    if (index == 1) {
        payment_container.classList.add("hidePaymentclass");
        payment_method_container.classList.remove("hidePaymentclass");


    }
    if (index == 2) {
        payment_container.classList.add("hidePaymentclass");
        payment_method_container.classList.add("hidePaymentclass");
        payment_done_container.classList.remove("hidePaymentclass");

    }
    circeles[index].classList.add("is-active");
    index = index >= circeles.length - 1 ? index : ++index;


}

function refresh() {
    location.reload();
}