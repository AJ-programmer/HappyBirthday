const noBtn = document.getElementById('Hinde');
        let btn = document.getElementById('btn');
            let position;
            noBtn.addEventListener('mouseover',() =>{
            let rand = Math.floor(Math.random() * (500 - 100) + 1);
            let rand2 = Math.floor(Math.random() * (-300 - 100) + 1);
            noBtn.style.transform = "translate("+rand+"px,"+rand2+"px)";
            });
    