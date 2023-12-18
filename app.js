window.onload = function () {
  let counter = 1;
  let body = document.querySelector('body')
  let startBtn = document.querySelector('.start');
  let nextQueBtn = document.querySelector('.nextQueBtn')
  let ans = document.querySelectorAll('.ans')


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
        ans1Href: 2,
        ans2: "B. 個性獨特、別具風格的小火龍",
        id2: "Q1B",
        ans2Href: 4,
      },
      {
        num: "Q2",
        que: "在冒險途中，你遇到了非常難纏的阿柏怪，但是你沒有勇氣挑戰牠。在這種時候，請問你會希望得到哪樣的鼓勵？",
        ans1: "A. 你要鼓起勇氣，向前邁進，把勇氣鍛鍊出來",
        id1: "Q2A",
        ans1Href: 3,
        ans2: "B. 沒關係，盡力就好，不需要太勉強自己",
        id2: "Q2B",
        ans2Href: 5,
      },
      {
        num: "Q3",
        que: "你跟傑尼龜正在迎接道館挑戰賽，但是對手非常厲害，你與傑尼龜已經快要撐不下去了，這時你想起了練習的經驗：",
        ans1: "A. 再強大的對手也會有弱點，魔鬼藏在細節裡",
        id1: "Q3A",
        ans1Href: "AB",
        ans2: "B. 放棄就什麼都沒有了，奮力一搏吧，訓練家",
        id2: "Q3B",
        ans2Href: "CD",
      },
      {
        num: "Q4",
        que: "在冒險途中，你得到了一次跟小火龍進行深度交流的機會，你覺得在這次的交流中，小火龍的性格可能會偏向：",
        ans1: "A. 神秘、難以捉摸",
        id1: "Q4A",
        ans1Href: "IJ",
        ans2: "B. 激動、具有感染力",
        id2: "Q4B",
        ans2Href: "KL",
      },
      {
        num: "Q5",
        que: "前往道館挑戰賽的途中，你跟妙蛙種子一起經歷了許多艱難的訓練，你們一起躺臥在星空之下思索未來。這時，有道聲音傳到你心底：",
        ans1: "A. 休息一下，沒關係的，你已經很努力！",
        id1: "Q5A",
        ans1Href: "EF",
        ans2: "B. 做你想做的就好，我們永遠支持你！",
        id2: "Q5B",
        ans2Href: "GH",
      }
    ]

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
            <div class="box">
              <div class="que-container">
                <h1 class="queText" id="${data[0].num}"></h1>
              </div>
              <div class="ans-container">
                <h2 class="ansA" id="${data[0].id1}">${data[0].ans1}</h2>
                <h2 class="ansB" id="${data[0].id2}">${data[0].ans2}</h2>
              </div>
            </div>
          </div>
          </div>
      </main>
    `
    typing(`${data[0].que}`)

    let queContainer = document.querySelector('.que-container')
    let ansContainer = document.querySelector('.ans-container')


    let Q1A = document.querySelector('#Q1A')
    Q1A.addEventListener('click', () => {
      Q1A.style.backgroundColor = "#fff"
      Q1A.style.color = "#000"
      setTimeout(() => {
        queContainer.innerHTML = `
          <h1 class="queText" id="${data[1].num}"></h1>
        `;
        ansContainer.innerHTML = `
          <h2 class="ansA" id="${data[1].id1}">${data[1].ans1}</h2>
          <h2 class="ansB" id="${data[1].id2}">${data[1].ans2}</h2>
        `
        typing(`${data[1].que}`)
        queContainer.style.backgroundSize = "22rem 10rem"
        ansContainer.style.backgroundSize = "22rem 12rem"

        let Q2A = document.querySelector('#Q2A')
        Q2A.addEventListener('click', () => {
          Q2A.style.backgroundColor = "#fff"
          Q2A.style.color = "#000"
          setTimeout(() => {
            queContainer.innerHTML = `
              <h1 class="queText" id="${data[2].num}"></h1>
            `;
            ansContainer.innerHTML = `
              <h2 class="ansA" id="${data[2].id1}">${data[2].ans1}</h2>
              <h2 class="ansB" id="${data[2].id2}">${data[2].ans2}</h2>
            `
            typing(`${data[2].que}`)
            queContainer.style.backgroundSize = "22rem 10rem"

            let Q3A = document.querySelector('#Q3A')
            Q3A.addEventListener('click', () => {
              Q3A.style.backgroundColor = "#fff"
              Q3A.style.color = "#000"

              setTimeout(() => {
                queContainer.style.backgroundSize = "22rem 7rem"
                ansContainer.style.backgroundSize = "22rem 8rem"
                queContainer.innerHTML = `
                  <h1 class="queText"></h1>
                `;
                ansContainer.innerHTML = `
                  <h2 class="ansA" id="cho-yin">A. 胡說樹</h2>
                  <h2 class="ansB" id="jin-wen">B. 奇魯莉安</h2>
                `
                typing("請選擇您的最佳夥伴：")

                let choYin = document.querySelector('#cho-yin')
                choYin.addEventListener('click', () => {
                  choYin.style.backgroundColor = "#fff"
                  choYin.style.color = "#000"

                  setTimeout(() => {
                    body.innerHTML = `
                    <audio src="./lyric/你是被抹去的那一段風景.mp3" autoplay id="music"></audio>
                    <div class="result">
                      <div>
                        <img src="./img/result/cho-yin.png" alt="">
                        <span>長按可以儲存照片ㄛ！</span>
                      </div>
                    </div>
                    `
                  }, 600)
                })

                let jinWen = document.querySelector('#jin-wen')
                jinWen.addEventListener('click', () => {
                  jinWen.style.backgroundColor = "#fff"
                  jinWen.style.color = "#000"

                  setTimeout(() => {
                    body.innerHTML = `
                    <audio src="./lyric/燕尾蝶.mp3" autoplay id="music"></audio>
                    <div class="result">
                      <div>
                        <img src="./img/result/jin-wen.png" alt="">
                        <span>長按可以儲存照片ㄛ！</span>
                      </div>  
                    </div>
                    `
                  }, 600)
                })

              }, 600)
            })

            let Q3B = document.querySelector('#Q3B')
            Q3B.addEventListener('click', () => {
              Q3B.style.backgroundColor = "#fff"
              Q3B.style.color = "#000"

              setTimeout(() => {
                queContainer.style.backgroundSize = "22rem 7rem"
                ansContainer.style.backgroundSize = "22rem 8rem"
                queContainer.innerHTML = `
                  <h1 class="queText"></h1>
                `;
                ansContainer.innerHTML = `
                  <h2 class="ansA" id="rui-hua">A. 大蔥鴨</h2>
                  <h2 class="ansB" id="yuan-liang">B. 喵喵</h2>
                `
                typing("請選擇您的最佳夥伴：")

                let ruiHua = document.querySelector('#rui-hua')
                ruiHua.addEventListener('click', () => {
                  ruiHua.style.backgroundColor = "#fff"
                  ruiHua.style.color = "#000"

                  setTimeout(() => {
                    body.innerHTML = `
                    <audio src="./lyric/冬天裡的一把火.mp3" autoplay id="music"></audio>
                    <div class="result">
                      <div>
                        <img src="./img/result/rui-hua.png" alt=""
                        <span>長按可以儲存照片ㄛ！</span>>
                      </div>  
                    </div>
                    `
                  }, 600)
                })

                let yuanLiang = document.querySelector('#yuan-liang')
                yuanLiang.addEventListener('click', () => {
                  yuanLiang.style.backgroundColor = "#fff"
                  yuanLiang.style.color = "#000"

                  setTimeout(() => {
                    body.innerHTML = `
                    <audio src="./lyric/頭號甜心.mp3" autoplay id="music"></audio>
                    <div class="result">
                      <div>
                        <img src="./img/result/yuan-liang.png" alt=""
                        <span>長按可以儲存照片ㄛ！</span>>
                      </div>  
                    </div>
                    `
                  }, 600)
                })
              }, 600)
            })
          }, 600)
        })


        let Q2B = document.querySelector('#Q2B')
        Q2B.addEventListener('click', () => {
          Q2B.style.backgroundColor = "#fff"
          Q2B.style.color = "#000"

          setTimeout(() => {
            queContainer.innerHTML = `
              <h1 class="queText" id="${data[4].num}"></h1>
            `;
            ansContainer.innerHTML = `
              <h2 class="ansA" id="${data[4].id1}">${data[4].ans1}</h2>
              <h2 class="ansB" id="${data[4].id2}">${data[4].ans2}</h2>
            `
            typing(`${data[4].que}`)
            queContainer.style.backgroundSize = "22rem 10rem"

            let Q5A = document.querySelector('#Q5A')
            Q5A.addEventListener('click', () => {
              Q5A.style.backgroundColor = "#fff"
              Q5A.style.color = "#000"

              setTimeout(() => {
                queContainer.style.backgroundSize = "22rem 7rem"
                ansContainer.style.backgroundSize = "22rem 8rem"
                queContainer.innerHTML = `
                <h1 class="queText"></h1>
              `;
                ansContainer.innerHTML = `
                <h2 class="ansA" id="chon-ip">A. 向日葵怪</h2>
                <h2 class="ansB" id="gui-yun">B. 月亮伊布</h2>
              `
                typing("請選擇您的最佳夥伴：")

                let chonIP = document.querySelector('#chon-ip')
                chonIP.addEventListener('click', () => {
                  chonIP.style.backgroundColor = "#fff"
                  chonIP.style.color = "#000"

                  setTimeout(() => {
                    body.innerHTML = `
                    <audio src="./lyric/追光者.mp3" autoplay id="music"></audio>
                    <div class="result">
                      <div>
                        <img src="./img/result/chon-ip.png" alt=""
                        <span>長按可以儲存照片ㄛ！</span>>
                      </div>  
                    </div>
                    `
                  }, 600)
                })

                let guiYun = document.querySelector('#gui-yun')
                guiYun.addEventListener('click', () => {
                  guiYun.style.backgroundColor = "#fff"
                  guiYun.style.color = "#000"

                  setTimeout(() => {
                    body.innerHTML = `
                    <audio src="./lyric/PLAY我呸.mp3" autoplay id="music"></audio>
                    <div class="result">
                      <div>
                        <img src="./img/result/gui-yun.png" alt=""
                        <span>長按可以儲存照片ㄛ！</span>>
                      </div>  
                    </div>
                    `
                  }, 600)
                })
              }, 600)
            })

            let Q5B = document.querySelector('#Q5B')
            Q5B.addEventListener('click', () => {
              Q5B.style.backgroundColor = "#fff"
              Q5B.style.color = "#000"

              setTimeout(() => {
                queContainer.style.backgroundSize = "22rem 7rem"
                ansContainer.style.backgroundSize = "22rem 8rem"
                queContainer.innerHTML = `
                  <h1 class="queText"></h1>
                `;
                ansContainer.innerHTML = `
                  <h2 class="ansA" id="wen-lan">A. 胖丁</h2>
                  <h2 class="ansB" id="yi-jie">B. 菊草葉</h2>
                `
                typing("請選擇您的最佳夥伴：")

                let wenLan = document.querySelector('#wen-lan')
                wenLan.addEventListener('click', () => {
                  wenLan.style.backgroundColor = "#fff"
                  wenLan.style.color = "#000"

                  setTimeout(() => {
                    body.innerHTML = `
                    <audio src="./lyric/天使.mp3" autoplay id="music"></audio>
                    <div class="result">
                      <div>
                        <img src="./img/result/wen-lan.png" alt=""
                        <span>長按可以儲存照片ㄛ！</span>>
                      </div>  
                    </div>
                    `
                  }, 600)
                })

                let yiJie = document.querySelector('#yi-jie')
                yiJie.addEventListener('click', () => {
                  yiJie.style.backgroundColor = "#fff"
                  yiJie.style.color = "#000"

                  setTimeout(() => {
                    body.innerHTML = `
                    <audio src="./lyric/姊妹.mp3" autoplay id="music"></audio>
                    <div class="result">
                      <div>
                        <img src="./img/result/yi-jie.png" alt=""
                        <span>長按可以儲存照片ㄛ！</span>>
                      </div>  
                    </div>
                    `
                  }, 600)
                })

              }, 600)
            })
          }, 600)
        })
      }, 600)
    })

    let Q1B = document.querySelector('#Q1B')
    Q1B.addEventListener('click', () => {
      Q1B.style.backgroundColor = "#fff"
      Q1B.style.color = "#000"

      setTimeout(() => {
        queContainer.innerHTML = `
          <h1 class="queText" id="${data[3].num}"></h1>
        `;
        ansContainer.innerHTML = `
          <h2 class="ansA" id="${data[3].id1}">${data[3].ans1}</h2>
          <h2 class="ansB" id="${data[3].id2}">${data[3].ans2}</h2>
        `
        typing(`${data[3].que}`)
        queContainer.style.backgroundSize = "22rem 10rem"
        let Q4A = document.querySelector('#Q4A')
        Q4A.addEventListener('click', () => {
          Q4A.style.backgroundColor = "#fff"
          Q4A.style.color = "#000"

          setTimeout(() => {
            queContainer.style.backgroundSize = "22rem 7rem"
            ansContainer.style.backgroundSize = "22rem 8rem"
            queContainer.innerHTML = `
              <h1 class="queText"></h1>
            `;
            ansContainer.innerHTML = `
              <h2 class="ansA" id="wang-shan">A. 呆呆王</h2>
              <h2 class="ansB" id="yin-gui">B. 雷公</h2>
            `
            typing("請選擇您的最佳夥伴：")

            let wangShan = document.querySelector('#wang-shan')
            wangShan.addEventListener('click', () => {
              wangShan.style.backgroundColor = "#fff"
              wangShan.style.color = "#000"

              setTimeout(() => {
                body.innerHTML = `
                <audio src="./lyric/你是我的眼.mp3" autoplay id="music"></audio>
                <div class="resu
                  <div>lt">
                    <img src="./img/result/wang-shan.png" alt=""
                    <span>長按可以儲存照片ㄛ！</span>>
                  </div>  
                </div>
                `
              }, 600)
            })

            let yinGui = document.querySelector('#yin-gui')
            yinGui.addEventListener('click', () => {
              yinGui.style.backgroundColor = "#fff"
              yinGui.style.color = "#000"

              setTimeout(() => {
                body.innerHTML = `
                <audio src="./lyric/Super Star.mp3" autoplay id="music"></audio>
                <div class="resu
                  <div>lt">
                    <img src="./img/result/yin-gui.png" alt=""
                    <span>長按可以儲存照片ㄛ！</span>>
                  </div>  
                </div>
                `
              }, 600)
            })

          }, 600)
        })

        let Q4B = document.querySelector('#Q4B')
        Q4B.addEventListener('click', () => {
          Q4B.style.backgroundColor = "#fff"
          Q4B.style.color = "#000"

          setTimeout(() => {
            queContainer.style.backgroundSize = "22rem 7rem"
            ansContainer.style.backgroundSize = "22rem 8rem"
            queContainer.innerHTML = `
              <h1 class="queText"></h1>
            `;
            ansContainer.innerHTML = `
              <h2 class="ansA" id="JT">A. 請假王</h2>
              <h2 class="ansB" id="how-z">B. 腕力</h2>
            `
            typing("請選擇您的最佳夥伴：")

            let JT = document.querySelector('#JT')
            JT.addEventListener('click', () => {
              JT.style.backgroundColor = "#fff"
              JT.style.color = "#000"

              setTimeout(() => {
                body.innerHTML = `
                <audio src="./lyric/妳是我的花朵.mp3" autoplay id="music"></audio>
                    <div class="result">
                      <div>
                        <img src="./img/result/JT.png" alt=""
                        <span>長按可以儲存照片ㄛ！</span>>
                      </div>  
                    </div>
                    `
              }, 600)
            })

            let howZ = document.querySelector('#how-z')
            howZ.addEventListener('click', () => {
              howZ.style.backgroundColor = "#fff"
              howZ.style.color = "#000"

              setTimeout(() => {
                body.innerHTML = `
                <audio src="./lyric/妳是我的Wifi.mp3" autoplay id="music"></audio>
                    <div class="result">
                      <div>
                        <img src="./img/result/how-z.png" alt=""
                        <span>長按可以儲存照片ㄛ！</span>>
                      </div>  
                    </div>
                    `
              }, 600)
            })

          }, 600)
        })
      }, 600)
    })
  })
}
