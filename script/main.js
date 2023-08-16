let wrap = document.querySelector("#wrap");

// wrap.addEventListener("click",()=>{
//     // wrap.querySelector("div").style.backgroundColor = "pink";
//     // js에서 style.sheet를 접근하는 것은 지양해야 한다
//     // 따라서 활성화 클래스(.on)를 지정해서 클래스를 js에서 제어하고
//     // style.sheet에서는 클래스가 있고, 없고의 스타일을 지정함으로
//     // js에서는 최소한으로 접근하는 것이 바람직하다

//     let isOn = wrap.classList.contains("on"); //contains ()안에있는애가 있으면1없음0
//     console.log(isOn);

//     // if(isOn){
//     //     wrap.classList.remove("on");
//     // }else{
//     //     wrap.classList.add("on");
//     // }
        // 삼항연산자로 변경하기
//     isOn ? wrap.classList.remove("on") : wrap.classList.add("on");
// })

wrap.addEventListener("click", () => {
    wrap.classList.toggle("on"); // 클릭한 대상과 변경한 대상이 똑같을 때만 가능함(자주 사용은 안함)
});
let btns = document.querySelectorAll(".btns li");
let boxs = document.querySelectorAll("section article");
// for(let i = 0; i < btns.length; i++){
//     btns[i].addEventListener("click",()=>{
//         for(let el of btns){
//         el.classList.remove("on");
//         }
//         btns[i].classList.add("on");

//         for(let box of boxs){
//             box.classList.remove("on");
//         }
//         boxs[i].classList.add("on");
//     })
// }
btns.forEach((el,index) => {
    el.addEventListener("click", () => {
        // 클릭하는 순간 일시적으로 모든 btns의 on클래스를 지워서 비활성화 한 뒤
        for (let el of btns) {
            el.classList.remove("on");
        }
        // 클릭한 대상만 on을 붙여 활성화
        el.classList.add("on");

        for(let box of boxs){
            box.classList.remove("on");
        }
        boxs[index].classList.add("on");
    })
})
// ▼ 쌤코드
// btns.forEach((el) => {
//     el.addEventListener("click", () => {
//         for (let btn of btns) { btn.classList.remove("on"); }
//                 // 가독성을 높이기 위해 el 이 아닌 btn으로 사용
//         el.classList.add("on");

        
//     })
// })
