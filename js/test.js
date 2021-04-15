
let states = [],truerep,kol,numTrue;
getLS();
let view = {
    finishState:false,
    printfMessage : function(message){
        let messageArea= document.querySelector('#messageArea');
        messageArea.innerHTML=message;
    },
    testTrue:function(numberReponse){
        model.TrueReponse();
        localStorage.setItem('numTrue', JSON.stringify(model.numberTrue));
        model.numberTrue[model.quantityReponses]=true;
        let reponseTrue=document.querySelector("#"+numberReponse);
        reponseTrue.setAttribute('class','testTrue')
        reponseTrue.selected="selected";
    },
    testFalse : function(numberReponse){
        
        let reponseFalse=document.querySelector("#"+numberReponse);
        reponseFalse.setAttribute('class','testFalse')
        reponseFalse.selected="selected";
    },
    End:function(){
        this.finishState=true;
        document.querySelector("#background-test-1").style.display="none";
        document.querySelector("#background-test-2").style.display="none";
        document.querySelector("#background-test-3").style.display="none";
        document.querySelector("#background-test-4").style.display="none";
        document.querySelector("#submitButton").style.display="none";
        document.querySelector("#nextButton").style.display="none";
        document.querySelector("#resetButton").style.marginBottom="20px";
        document.querySelector("#resetButton").style.marginTop="20px";
        let reponseFin=document.querySelector("#messageArea");
        reponseFin.style.display="none";
        let question = document.querySelector('#question');
        question.style.display="none";
        let reponseFinish=document.querySelector("#messageAreaFinish");
            if(localStorage.getItem('repTrue')!=undefined)
            {
                model.reponsesTrue=JSON.parse(localStorage.getItem('repTrue'));
            
            }
        localStorage.setItem('numTrue', JSON.stringify(model.numberTrue));
        let procent=Math.round((model.getTrueReponses()/(model.reponses.length-1))*100);
        reponseFinish.innerHTML=("Твой результат:"+procent+"%");
        reponseFinish.setAttribute('class','finishScreen');
        let resetButton=document.querySelector('#resetButton');
        resetButton.style.display="block"
        resetButton.setAttribute('class','resetButton1');
    }
    };
    view.printfMessage('Варианты ответов:');
  let model = {
      reponsesTrue:truerep,
      reponses :[3,2,1,3,4,2,2,4,3,3,1,2,3,4,1,2,2,3,1,2,2],
      quantityReponses :kol,
      numberTrue :numTrue,
      quantityquestions:4,
      submitState :states,
      allPhrases:[
            ["мыт","дым","выход ","оброк"],
            ["оброк","натуральные повинности","полоняничные деньги","дань"],
            ["Иване IV Грозном","Михаиле Федоровиче","Князе Олеге","Александре I"],
            ["при Екатерине I","при Александре I","при Петре I","при Михаиле Федоровиче"],
            ["от численности населения","от имущества","от величины дохода","был примерно одинаковый"],
            ["1823","1834","1826","1855"],
            ["15%","30%","50%","70%"],
            ["П.А. Строганова","В.П. Кочубея","Н.Н. Новосельцева","М.М. Сперанского"],
            ["А.А. Чарторыйский","П.А. Строганов","Е.Ф. Канкрин","В.П. Кочубей"],
            ["подушные подати","налоги","повинности","сборы"],
            ["Николая II","Екатерины II","Александра II","Николая I"],
            ["новая экономическая политика","военный коммунизм","первая пятилетка","индустриализация"],
            ["начало коллективизации","отмена сухого закона","замена продразвертки продналогом","денежная реформа 1922-1924 гг."],
            ["XII съездом РСДРП(б)","XI съездом РСДРП(б)","IX съездом РСДРП(б)","X съездом РСДРП(б)"],
            ["налог на холостяков, одиноких и малосемейных граждан","военный налог","сбор с владельцев скота","сельскохозяйственный налог"],
            ["инвалидов 2-й группы","колхозников","рабочих","служащих"],
            ["нэпа","перестройки","индустриализации","правления Хрущева"],
            ["прогрессивная","регрессивная","пропорциональная","твердая"],
            ["Федеральная служба налоговой полиции","Федеральная налоговая служба","Министерство Российской Федерации по налогам и сборам","Главное управление по расследованию экономических и налоговых преступлений"],
            ["водный налог","транспортный налог","налог на добавленную стоимость","налог на прибыль организаций"]
      ],
        questions:[
        "Дань, взымавшаяся в XIII веке в пользу ханов Золотой Орды, называлась ...",
        "Возлагаемые государством на население обязанности выполнять определенные работы и предоставлять личное имущество в распоряжение госуд.власти - это",
        "Сбор четвертовых денег установился при ...",
        "При чьем правлении был введен налог на бороды?",
        "От чего зависел размер подушной подати?",
        "В каком году был введен сбор с проезда по шоссе Санкт-Петербург - Москва?",
        "Сколько процентов от государственных доходов составляла подушная подать при Екатерине II?",
        "Чьи проекты в сфере гос.бюджета осуществлялись при правлении Александра I?",
        "Кто в 1823—1844 возглавлял Министерство финансов Российской империи?",
        "... подразделялись на мирские и земские",
        "Реформы С.Ю. Витте и П.А. Столыпина проводились в период правления",
        "Как в истории Советской России называется экономический период 1917-1922 гг.?",
        "Что было основной мерой перехода от военного коммунизма к политике НЭПа?",
        "Основные положения новой экономической политики были приняты",
        "21 ноября 1941 г. был введен",
        "В отношении кого военный налог имел фиксированную ставку?",
        "Закон  «О подоходном налоге с граждан СССР, иностранных граждан и лиц без гражданства» был принят в период",
        "К какому виду налоговой системы относится система Российской Федерации?",
        "Как в 1998 году назывался правоохранительный орган в сфере налогообложения?",
        "Какой из налогов Российской Федерации не является федеральным?"
        ],
      TrueReponse:function(){
          this.reponsesTrue++;
      },
      getTrueReponses : function(){
          let num=0;
          for(let i = 0 ; i< this.numberTrue.length ; i++){
            console.log(this.numberTrue[i]);
            if(this.numberTrue[i] == true)num++;
          }
          console.log(num);
        return num;
      },
      nextquestion:function(){
        let img = document.querySelector("#img-rep");
        let x =model.quantityReponses+1;
        //\img\test
        if(x<=20)
        img.innerHTML='<img src="img/test/' +x+ '.jpg">';
        let question = document.querySelector('#question');
        question.innerHTML = (this.questions[this.quantityReponses]);
        let test = document.querySelectorAll('.info-text');
        this.isFinal();
        if(view.finishState == false){
            for(let i = 0 ; i<this.quantityquestions ; i++){ 
                
                test[i].innerHTML=(this.allPhrases[this.quantityReponses][i]);
            }
        }
      },
      reponse:function(rep){
        let reponseClass=('background-test-'+rep);
            if(rep==this.reponses[this.quantityReponses]){
                view.testTrue(reponseClass);
                view.printfMessage('Молодец, правильный ответ');
                
                return true;
            }
        view.testFalse(reponseClass);
        view.printfMessage('Неверно, правильный ответ:'+this.reponses[this.quantityReponses]);
        return false;
      },
      parseReponse:function(per){
          
          let reponseClass='background-test-'+per;
          if(this.reponse(per)){
              view.testTrue(reponseClass);
              return true;
          }
          view.testFalse(reponseClass)
          return false;
      },
        get_quenttityReponses:function(){
            return this.quantityReponses;
        },
        get_reponses:function(){
            return this.reponses;
        },    
        quantityReponsesPlus:function(){
            this.quantityReponses++;
        },
        isFinal:function(){
            if(this.quantityReponses==(this.reponses.length-1)){
                view.End();
            }
        },
        checkCheck:function(){
            let radioCheckTrue=document.querySelectorAll('.testTrue');
            let radioCheckFalse=document.querySelectorAll('.testFalse');
            if(radioCheckFalse>0 || radioCheckTrue>0)return false;
        
            if (this.submitState[this.quantityReponses] == true)return true;
            return false;
        },
  };
 controller = {
   
    clickButton : function(){
      
        let submitButton=document.querySelector('#submitButton');
       // if(this.checkCheck())
        submitButton.onclick=this.processTest;
    },
    processTest:function(){
       if(model.submitState[model.get_quenttityReponses()]==false){
        if(model.submitState[model.quantityReponses]==true){
            model.reponse(j);
            model.parseReponse(j);
            setLS();
            
            return true;  
        }
        for(let i = 0 ; i< model.quantityquestions ; i++){
           let j=i+1;
            let radioCheck=document.querySelector('#test-'+j);
              if(radioCheck.checked){
                model.submitState[model.get_quenttityReponses()] = true;
                localStorage.setItem('lastRep', JSON.stringify(j));
                localStorage.setItem('sumbit', JSON.stringify(model.submitState));
                model.reponse(j);
                
                setLS();
                return true;
            }
           

        }
       }
    },
    numbersButton:function(){
        
        let numberButtons=document.querySelectorAll('.number');
        for(let i = 0 ; i< numberButtons.length ; i++){
            let but = numberButtons[i];
            console.dir(but);
           but.addEventListener("click", ()=>{
            kol = i+1;
            model.quantityReponses = kol;
           // location.reload();
            console.log(kol);
           })
           //numberButtons.onclick=this.nextButtonProcess(i);
           // console.dir(numberButtons[i]);
        } 
    },
    nextButtonProcess:function(but){
        col = but;
        console.log(but);
        location.reload();

    },
    resetButton:function(){
        
        let resetButton=document.querySelector('#resetButton');
        resetButton.onclick=this.resetButtonProcess;
    },
    resetButtonProcess:function(){
       // localStorage.clear();
        localStorage.removeItem('quan');
        localStorage.removeItem('sumbit');
        localStorage.removeItem('repTrue');
        localStorage.removeItem('lastRep');
        localStorage.removeItem('numTrue');
        localStorage.removeItem('min');
        localStorage.removeItem('sec');
        kol = 0,truerep=0,states=[false,false,false,false,false,false,false],numTrue=[false,false,false,false,false,false,false]
        location.reload();
    },

    nextButton:function(){
        
        let nextButton=document.querySelector('#nextButton');
        
        nextButton.onclick=this.nextButtonProcess;
    },
    nextButtonProcess : function(){
       
        if(model.checkCheck()){
            setLS();
            model.isFinal();
        model.quantityReponsesPlus();
        model.nextquestion();
        view.printfMessage('Варианты ответов:');
        model.submitState[model.get_quenttityReponses()] =false;
        let radioCheckTrue=document.querySelectorAll('.testTrue');
        let radioCheckFalse=document.querySelectorAll('.testFalse');
        for(let i = 0;i<radioCheckTrue.length;i++){
            radioCheckTrue[i].classList.remove('testTrue');
        }
        for(let i = 0;i<radioCheckFalse.length;i++){
            radioCheckFalse[i].classList.remove('testFalse');
        }
      let radioCheck=document.getElementsByName('test');
        for(let i = 0;i<model.quantityquestions;i++){
            if(radioCheck[i].checked){
                radioCheck[i].checked=false;
            }
        }
        }
    }
 }
function setLS(){
  localStorage.setItem('quan', JSON.stringify(model.quantityReponses));
    localStorage.setItem ("sumbit",JSON.stringify(model.submitState));
    localStorage.setItem('repTrue', JSON.stringify(model.reponsesTrue));
    localStorage.setItem('numTrue', JSON.stringify(model.numberTrue));
}
function getLS(){
    if(localStorage.getItem('quan')!=undefined){
    kol= JSON.parse(localStorage.getItem('quan'))+1;
    }
    else{
        kol=0;
    }
    if(localStorage.getItem('sumbit')!=undefined){
    states=JSON.parse(localStorage.getItem ("sumbit"));
        }
    else{
        states=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    }
    if(localStorage.getItem('numTrue')!=undefined){
        numTrue=JSON.parse(localStorage.getItem ("numTrue"));
    }
    else{
        numTrue=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    }
    if(localStorage.getItem('repTrue')!=undefined){
         truerep=JSON.parse(localStorage.getItem ("repTrue"));
     }
    else{
        truerep=0;
    }
}


model.nextquestion();
 controller.clickButton();
 controller.nextButton();
 controller.resetButton();
 model.isFinal();
 let sec,min;
 if(localStorage.getItem('sec')!=undefined){
    sec=JSON.parse(localStorage.getItem ("sec"));
}
else{
    sec=0;
}
if(localStorage.getItem('sec')!=undefined){
    min=JSON.parse(localStorage.getItem ("min"));
}
else{
    min=0;
} 
 let start = Date.now();   let timer = setInterval(function() {
    let timePassed = Date.now() - start;
    
        sec++;
        if(sec==60){
            sec=sec%60;
            min++;
        }
        if(min==15){
            ending();
            clearInterval(timer);
            return;   
       
    }
    localStorage.setItem('sec', JSON.stringify(sec));
    localStorage.setItem('min', JSON.stringify(min));
    draw();
  }, 1000);
  function draw() {
      let secStr = sec,minStr = min;
      if(sec<10)secStr=0+""+sec;
      if(min<10)minStr=0+""+min;
    let blockTime=document.querySelector(".time")
    blockTime.innerHTML = minStr+" : "+secStr;
    
  }
  function ending(){
      draw();
    model.quantityReponses = 20;
    kol=20;
    localStorage.setItem('numTrue', JSON.stringify(kol));
    model.isFinal();
  }
  