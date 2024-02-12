window.onload = function () {
  let body = document.querySelector('body')
  let startBtn = document.querySelector('.start');

  startBtn.addEventListener("click", () => {
    body.style.overflowY = "scroll";
    let isProcessing = true;
    let delay = 2500;
    setInterval(() => {
      if (isProcessing == false) {
        isProcessing = true;
        console.log("isProcessing is false");
      }
    }, delay);


    let data = [
      {
        num: "Q1",
        que: "歡迎你來到真新鎮，大木博士詢問你喜歡：",
        ans1: "A. 個性溫和的妙蛙種子、傑尼龜",
        id1: "Q1A",
        Anext: 2,
        ans2: "B. 個性獨特、別具風格的小火龍",
        id2: "Q1B",
        Bnext: 4,
      },
      {
        num: "Q2",
        que: "在冒險途中，你遇到了非常難纏的阿柏怪，但是你沒有勇氣挑戰牠。在這種時候，請問你會希望得到哪樣的鼓勵？",
        ans1: "A. 你要鼓起勇氣，向前邁進，把勇氣鍛鍊出來",
        id1: "Q2A",
        Anext: 3,
        ans2: "B. 沒關係，盡力就好，不需要太勉強自己",
        id2: "Q2B",
        Bnext: 5,
      },
      {
        num: "Q3",
        que: "你跟傑尼龜正在迎接道館挑戰賽，但是對手非常厲害，你與傑尼龜已經快要撐不下去了，這時你想起了練習的經驗：",
        ans1: "A. 再強大的對手也會有弱點，魔鬼藏在細節裡",
        id1: "Q3A",
        Anext: 6,
        ans2: "B. 放棄就什麼都沒有了，奮力一搏吧，訓練家",
        id2: "Q3B",
        Bnext: 7,
      },
      {
        num: "Q4",
        que: "在冒險途中，你得到了一次跟小火龍進行深度交流的機會，你覺得在這次的交流中，小火龍的性格可能會偏向：",
        ans1: "A. 神秘、難以捉摸",
        id1: "Q4A",
        Anext: 10,
        ans2: "B. 激動、具有感染力",
        id2: "Q4B",
        Bnext: 11,
      },
      {
        num: "Q5",
        que: "前往道館挑戰賽的途中，你跟妙蛙種子一起經歷了許多艱難的訓練，你們一起躺臥在星空之下思索未來。這時，有道聲音傳到你心底：",
        ans1: "A. 休息一下，沒關係的，你已經很努力！",
        id1: "Q5A",
        Anext: 8,
        ans2: "B. 做你想做的就好，我們永遠支持你！",
        id2: "Q5B",
        Bnext: 9,
      },
      {
        num: "Q6",
        que: "請選擇您的最佳夥伴",
        ans1: "A. 胡說樹",
        id1: "Q6A",
        Anext: "cho-yin",
        Alyric: "你是被抹去的那一段風景",
        ans2: "B. 奇魯莉安",
        id2: "Q6B",
        Bnext: "jin-wen",
        Blyric: "燕尾蝶"
      },
      {
        num: "Q7",
        que: "請選擇您的最佳夥伴",
        ans1: "A. 大蔥鴨",
        id1: "Q7A",
        Anext: "rui-hua",
        Alyric: "冬天裡的一把火",
        ans2: "B. 喵喵",
        id2: "Q7B",
        Bnext: "yuan-liang",
        Blyric: "頭號甜心"
      },
      {
        num: "Q8",
        que: "請選擇您的最佳夥伴",
        ans1: "A. 向日葵怪",
        id1: "Q8A",
        Anext: "chon-ip",
        Alyric: "追光者",
        ans2: "B. 月亮伊布",
        id2: "Q8B",
        Bnext: "gui-yun",
        Blyric: "PLAY我呸"
      },
      {
        num: "Q9",
        que: "請選擇您的最佳夥伴",
        ans1: "A. 胖丁",
        id1: "Q9A",
        Anext: "wen-lan",
        Alyric: "天使",
        ans2: "B. 菊草葉",
        id2: "Q9B",
        Bnext: "yi-jie",
        Blyric: "姊妹",
      },
      {
        num: "Q10",
        que: "請選擇您的最佳夥伴",
        ans1: "A. 呆呆王",
        id1: "Q10A",
        Anext: "wang-shan",
        Alyric: "你是我的眼",
        ans2: "B. 雷公",
        id2: "Q10B",
        Bnext: "yin-gui",
        Blyric: "Super Star",
      },
      {
        num: "Q11",
        que: "請選擇您的最佳夥伴",
        ans1: "A. 請假王",
        id1: "Q11A",
        Anext: "JT",
        Alyric: "妳是我的花朵",
        ans2: "B. 腕力",
        id2: "Q11B",
        Bnext: "how-z",
        Blyric: "妳是我的Wifi",
      },
    ]

    function showResult(result, lyric) {
      body.innerHTML = `
      <audio src="./lyric/${lyric}.mp3" autoplay id="music"></audio>
      <div class="result">
        <div>
          <img src="./img/result/${result}.png" alt="">
          <span>長按可以儲存照片ㄛ！</span>
        </div>  
      </div>
    `
    }

    function typing(typeString) {
      new TypeIt(".queText", {
        strings: typeString,
        speed: 80,
        waitUntilVisible: true,
        cursor: false,
      }).go();
    }

    body.innerHTML = `
      <main>
        <div class="soulmate">
          <div class="queContent">
            <div class="box"></div>
          </div>
          </div>
      </main>
    `
    let nextQue;

    function queRender(que) {
      let box = document.querySelector('.box')
      setTimeout(() => {
        box.innerHTML = `
        <div class="que-container" id="${data[que - 1].num}-que-container">
          <h1 class="queText" id="${data[que - 1].num}"></h1>
        </div>
        <div class="ans-container" id="${data[que - 1].num}-ans-container">
          <h2 class="ansA" id="${data[que - 1].id1}">${data[que - 1].ans1}</h2>
          <h2 class="ansB" id="${data[que - 1].id2}">${data[que - 1].ans2}</h2>
        </div>
      `;
        typing(`${data[que - 1].que}`)
        let ansA = document.querySelector('.ansA')
        let ansB = document.querySelector('.ansB')

        ansA.addEventListener('click', () => {
          ansA.style.backgroundColor = "#fff"
          ansA.style.color = "#000"
          nextQue = data[que - 1].Anext
          let lyric = data[que - 1].Alyric
          if (typeof nextQue == "number") {
            queRender(nextQue)
          } else if (typeof nextQue == "string") {
            showResult(nextQue, lyric)
          }
        })
        ansB.addEventListener('click', () => {
          ansB.style.backgroundColor = "#fff"
          ansB.style.color = "#000"
          nextQue = data[que - 1].Bnext
          let lyric = data[que - 1].Blyric
          if (typeof nextQue == "number") {
            queRender(nextQue)
          } else if (typeof nextQue == "string") {
            showResult(nextQue, lyric)
          }
          // queRender(data[que - 1].Bnext)
        })


      }, 600)

    }

    queRender(1)


  })
}
