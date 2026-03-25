(function () {
  'use strict';

  const characters = {
    xiezheng: { name: '謝征', archetype: '隱世謀略家', desc: '你外表溫潤如玉，內心卻有著驚人的謀略。習慣將真實實力藏於不露聲色之下，默默守護身邊重要的人。', img: './assets/result-xiezheng.jpg' },
    fanchangyu: { name: '樊長玉', archetype: '熱血戰士', desc: '你天生正義感爆棚，遇到不平之事絕不袖手旁觀。雖然有時魯莽，但你的真誠與勇敢是最強大的武器。', img: './assets/result-fanchangyu.jpg' },
    qimin: { name: '齊旻', archetype: '孤傲皇孫', desc: '你身上有著與生俱來的高貴氣質，命運多舛卻從不自怨自艾。你選擇沉默承受，暗中籌謀一切。', img: './assets/result-qimin.jpg' },
    gongsunyin: { name: '公孫鄞', archetype: '智慧學者', desc: '你是團隊中最可靠的智囊。博覽群書、冷靜分析，總能在關鍵時刻提供最理性的建議。', img: './assets/result-gongsunyin.jpg' },
    qishu: { name: '齊姝', archetype: '率性公主', desc: '你不被身份束縛，敢愛敢恨。即使身處高位，也願意為了真心放下一切，活出真正的自己。', img: './assets/result-qishu.jpg' },
    songyan: { name: '宋硯', archetype: '野心家', desc: '你極度務實，目標明確，為了往上爬可以做出艱難的取捨。你相信成功需要代價，而你願意支付。', img: './assets/result-songyan.jpg' },
    lihuaian: { name: '李懷安', archetype: '滄桑君子', desc: '你是真正的君子——前半生意氣風發，後半生即使歷經磨難也不改風骨。克制隱忍是你的修行，仁善是你的底色。', img: './assets/result-lihuaian.jpg' },
    yuqianqian: { name: '俞淺淺', archetype: '俠義女商', desc: '你獨立又仗義，經商頭腦與俠義心腸兼具。朋友有難時第一個衝出來，用溫暖照亮身邊每一個人。', img: './assets/result-yuqianqian.jpg' },
    fanchangning: { name: '樊長寧', archetype: '堅強小妹', desc: '你看似柔弱，內心卻有超乎想像的堅韌。面對危機能冷靜應對，對家人的愛深沉而細膩。', img: './assets/result-fanchangning.jpg' },
    weiyan: { name: '魏嚴', archetype: '梟雄權臣', desc: '你是天生的掌權者，手腕高明、心思深沉。表面冷酷無情，內心卻被某段過往牢牢束縛。', img: './assets/result-weiyan.jpg' },
    suiyuanqing: { name: '隨元青', archetype: '瘋狂世子', desc: '你張狂不羈，做事不按牌理出牌。然而在瘋狂的外表下，你比誰都渴望被理解、被接納。', img: './assets/result-suiyuanqing.jpg' }
  };

  const questions = [
    {
      img: './assets/questions/question_01.png',
      text: '你在一場宴會中，注意到角落有人被欺負，你會？',
      options: [
        { text: '立刻衝上去阻止，打抱不平', scores: { fanchangyu: 3, yuqianqian: 1 } },
        { text: '暗中觀察，等時機成熟再出手', scores: { xiezheng: 3, gongsunyin: 1 } },
        { text: '用言語巧妙化解，讓對方知難而退', scores: { qishu: 2, yuqianqian: 2 } },
        { text: '記在心裡，日後找機會讓欺負者付出代價', scores: { weiyan: 2, suiyuanqing: 2 } }
      ]
    },
    {
      img: './assets/questions/question_02.png',
      text: '你得到了一個可以改變命運的秘密，你會怎麼做？',
      options: [
        { text: '獨自承擔，不讓任何人知道', scores: { qimin: 3, lihuaian: 1 } },
        { text: '告訴最信任的人，一起面對', scores: { xiezheng: 2, gongsunyin: 2 } },
        { text: '利用這個秘密換取最大利益', scores: { songyan: 3, weiyan: 1 } },
        { text: '不在乎秘密，按自己的方式活', scores: { fanchangyu: 2, qishu: 2 } }
      ]
    },
    {
      img: './assets/questions/question_03.png',
      text: '你最不能忍受的事情是？',
      options: [
        { text: '有人傷害我在乎的家人', scores: { fanchangning: 2, fanchangyu: 2 } },
        { text: '被信任的人背叛', scores: { suiyuanqing: 3, qimin: 1 } },
        { text: '不公不義的權力壓迫', scores: { yuqianqian: 2, lihuaian: 2 } },
        { text: '自己的計劃被打亂', scores: { weiyan: 2, songyan: 2 } }
      ]
    },
    {
      img: './assets/questions/question_04.png',
      text: '身處亂世，你的生存之道是？',
      options: [
        { text: '文能安邦、武能定國，兩手都硬', scores: { lihuaian: 3, xiezheng: 1 } },
        { text: '廣結好友，互相扶持活下去', scores: { yuqianqian: 3, gongsunyin: 1 } },
        { text: '隱忍蟄伏，等待翻盤的一天', scores: { qimin: 2, weiyan: 2 } },
        { text: '管他亂世不亂世，我就走自己的路', scores: { fanchangyu: 2, suiyuanqing: 2 } }
      ]
    },
    {
      img: './assets/questions/question_05.png',
      text: '面對一段感情，你的態度是？',
      options: [
        { text: '全心全意守護，即使對方不知道', scores: { xiezheng: 3, lihuaian: 1 } },
        { text: '大膽表白，敢愛就要說出來', scores: { qishu: 3, fanchangyu: 1 } },
        { text: '感情是弱點，我選擇理性控制', scores: { songyan: 2, weiyan: 2 } },
        { text: '用我的方式愛，哪怕全世界不理解', scores: { suiyuanqing: 3, fanchangning: 1 } }
      ]
    },
    {
      img: './assets/questions/question_06.png',
      text: '團隊中你通常扮演什麼角色？',
      options: [
        { text: '衝鋒陷陣的行動派', scores: { fanchangyu: 3, qishu: 1 } },
        { text: '出謀劃策的軍師', scores: { gongsunyin: 3, xiezheng: 1 } },
        { text: '默默支持大家的後勤', scores: { fanchangning: 2, yuqianqian: 2 } },
        { text: '掌控全局的領導者', scores: { weiyan: 3, qimin: 1 } }
      ]
    },
    {
      img: './assets/questions/question_07.png',
      text: '如果可以選擇一種人生，你會選？',
      options: [
        { text: '隱姓埋名，與愛人歸隱山林', scores: { xiezheng: 2, lihuaian: 2 } },
        { text: '征戰沙場，成為一代名將', scores: { fanchangyu: 3, lihuaian: 1 } },
        { text: '經商致富，自由自在不求人', scores: { yuqianqian: 3, songyan: 1 } },
        { text: '掌握朝堂，讓所有人俯首稱臣', scores: { weiyan: 2, suiyuanqing: 2 } }
      ]
    },
    {
      img: './assets/questions/question_08.png',
      text: '最能代表你的一句話是？',
      options: [
        { text: '我不需要全世界理解，只要你們平安就好', scores: { xiezheng: 2, fanchangning: 2 } },
        { text: '不公平的事，我一件都不會放過', scores: { fanchangyu: 2, yuqianqian: 2 } },
        { text: '這盤棋，我已經看到了結局', scores: { gongsunyin: 2, qimin: 2 } },
        { text: '大哥，我只信你一個人', scores: { suiyuanqing: 3, qishu: 1 } }
      ]
    }
  ];

  let currentQuestion = 0;
  let userScores = {};

  // Init variables
  let screenStart, screenQuiz, screenResult, btnStart, btnShare, btnRestart, qCurrent, progressFill, questionIllustration, questionText, optionsContainer;

  function init() {
    screenStart = document.getElementById('screen-start');
    screenQuiz = document.getElementById('screen-quiz');
    screenResult = document.getElementById('screen-result');
    btnStart = document.getElementById('btn-start');
    btnShare = document.getElementById('btn-share');
    btnRestart = document.getElementById('btn-restart');
    
    qCurrent = document.getElementById('q-current');
    progressFill = document.getElementById('progress-fill');
    questionIllustration = document.getElementById('question-illustration');
    questionText = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');

    btnStart.addEventListener('click', startQuiz);
    btnShare.addEventListener('click', shareResult);
    btnRestart.addEventListener('click', resetQuiz);
    Object.keys(characters).forEach(k => userScores[k] = 0);
  }

  function startQuiz() {
    screenStart.classList.remove('active');
    screenStart.classList.add('hidden');
    screenQuiz.classList.remove('hidden');
    screenQuiz.classList.add('active');
    renderQuestion();
  }

  function renderQuestion() {
    const q = questions[currentQuestion];
    qCurrent.textContent = currentQuestion + 1;
    progressFill.style.width = ((currentQuestion + 1) / questions.length) * 100 + '%';
    
    questionIllustration.classList.add('fade-out');
    setTimeout(() => {
      questionIllustration.src = q.img;
      questionIllustration.onload = () => questionIllustration.classList.remove('fade-out');
    }, 200);

    questionText.textContent = q.text;
    optionsContainer.innerHTML = '';
    
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt.text;
      btn.addEventListener('click', () => selectOption(opt.scores));
      optionsContainer.appendChild(btn);
    });
  }

  function selectOption(scores) {
    for (let char in scores) {
      if (userScores[char] !== undefined) {
        userScores[char] += scores[char];
      }
    }
    
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      showResult();
    } else {
      renderQuestion();
    }
  }

  function showResult() {
    let maxScore = -1;
    let bestChar = null;
    
    const keys = Object.keys(characters);
    for (let k of keys) {
      if (userScores[k] > maxScore) {
        maxScore = userScores[k];
        bestChar = k;
      }
    }

    const res = characters[bestChar];
    document.getElementById('result-image').src = res.img;
    document.getElementById('result-title').textContent = '你是 — ' + res.name;
    document.getElementById('result-archetype').textContent = res.archetype;
    document.getElementById('result-desc').textContent = res.desc;

    screenQuiz.classList.remove('active');
    screenQuiz.classList.add('hidden');
    screenResult.classList.remove('hidden');
    screenResult.classList.add('active');
  }

  function resetQuiz() {
    currentQuestion = 0;
    Object.keys(characters).forEach(k => userScores[k] = 0);
    screenResult.classList.remove('active');
    screenResult.classList.add('hidden');
    screenStart.classList.remove('hidden');
    screenStart.classList.add('active');
  }

  function shareResult() {
    const url = window.location.href.split('?')[0] + '?utm_source=share&utm_medium=social&utm_campaign=tool-zhuyu-quiz-v1.0.0';
    const charName = document.getElementById('result-title').textContent.replace('你是 — ', '');
    const text = `我測出來是《逐玉》裡的「${charName}」！\n你是逐玉裡的誰？快來測測看！\n${url}`;
    
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast();
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showToast();
      } catch (err) {
        console.error('Failed to copy', err);
      }
      document.body.removeChild(textArea);
    }
  }

  function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
