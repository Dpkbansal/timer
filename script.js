let s=0;
        let m=0;
        function timer(){
            let divMain = document.querySelector(".display");
            if(m==0 && s==0){
                return;
            }
            else{
                if(s==00){
                    m--;
                    s=60;
                }
                else{
                    m=m;
                }
                s--;
                if(s<10){
                    s="0"+s;
                }
                else{
                    s=s;
                }
                if(m<10){
                    divMain.textContent = "0"+m+":"+s;
                }
                else{
                    divMain.textContent = m+":"+s;
                }
            }
        }
        
        function minutesIncrease(){
            m++;
            divMain = document.querySelector(".display");
            if(m<10){
                if(s ==0){
                divMain.textContent = "0"+m+":"+"00";
                }
                else{
                    divMain.textContent = "0"+m+":"+s;
                }
            }
            else{
                if(s ==0){
                    divMain.textContent = m+":"+"00";
                }
                else{
                    divMain.textContent = m+":"+s;
                }
            }
        }

        function minutesDecrease(){
            if(m==0){
                return
            }
            else{
                m--;
                divMain = document.querySelector(".display");
                if(m<10){
                    if(s ==0){
                    divMain.textContent = "0"+m+":"+"00";
                    }
                    else{
                        divMain.textContent = "0"+m+":"+s;
                    }
                }
                else{
                    if(s ==0){
                        divMain.textContent = m+":"+"00";
                    }
                    else{
                        divMain.textContent = m+":"+s;
                    }
                }
            }
        }
        
        let display =0;
            
        let increaseButton = document.querySelector(".increase");
        increaseButton.addEventListener('click',function(){
            minutesIncrease();
        })
        
        let decreaseButton = document.querySelector(".decrease");
        decreaseButton.addEventListener('click',function(){
            minutesDecrease();
        })

        let startButton = document.querySelector(".start");
        startButton.addEventListener('click',function(){
            if(m==0 && s==0){
                return;
            }
            else{
                if(s==0){
                    s=60;
                    m=m-1;
                }
                else{
                    s=s;
                    m=m;
                }
            }
            display = setInterval(function(){
                timer();
            },1000);
        })
        

        let resetButton = document.querySelector(".reset");
        resetButton.addEventListener('click',function(){
            clearInterval(display);
            m=0;
            s=0;
            divMain = document.querySelector(".display");
            divMain.textContent = "0"+m+":"+"0"+s;
        })
        let pauseButton = document.querySelector(".pause");
        pauseButton.addEventListener('click',function(){
            clearInterval(display);
        })

        let buttons = document.querySelectorAll("button");
        buttons.forEach((button) => 
        button.addEventListener('click',function(){
            button.classList.add("buttonClick");
            let removeClass = setTimeout(function(){
                button.classList.remove("buttonClick")
            },70);
        })
        )