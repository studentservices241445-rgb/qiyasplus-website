// course_test.js
// هذا السكربت يضيف اختبارات تجريبية لكل دورة. يُعرف مجموعة أسئلة لكل اختبار
// ويعرضها للمستخدم بشكل تفاعلي ثم يحسب النتيجة ويقترح الباقة المناسبة.

// كائن يحتوي على الأسئلة لكل دورة. يمكن توسيع الأسئلة لاحقاً.
const courseTests = {
  step: [
    {
      question: "ما هو عدد أقسام اختبار STEP الرسمية؟",
      options: ["قسمان", "ثلاثة أقسام", "أربعة أقسام", "خمسة أقسام"],
      correct: 2,
    },
    {
      question: "أي مهارة لا تُختبر في STEP؟",
      options: ["الاستماع", "القراءة", "التحدث", "الكتابة"],
      correct: 2,
    },
    {
      question: "أي مما يلي يعد إستراتيجية فعالة لرفع درجتك في STEP؟",
      options: ["حفظ الكلمات فقط", "حل اختبارات تجريبية مع مراجعة الأخطاء", "الاعتماد على الترجمة الحرفية", "ترك الأسئلة الصعبة"],
      correct: 1,
    },
    // تزن القراءة نسبة أكبر من الأقسام الأخرى في الاختبار، لذا يعد التركيز عليها مهماً
    {
      question: "أي قسم يحصل على أعلى وزن في اختبار STEP؟",
      options: ["الاستماع", "البناء اللغوي (القواعد)", "القراءة", "الكتابة"],
      correct: 2,
    },
    {
      question: "من الجهة التي تشرف على اختبار STEP؟",
      options: ["المركز الوطني للقياس", "وزارة التعليم", "هيئة تقويم التعليم والتدريب", "الهيئة السعودية للمهندسين"],
      correct: 2,
    },
  ],
  qdrat: [
    {
      question: "كم عدد الأجزاء الرئيسية لاختبار القدرات العامة؟",
      options: ["جزء واحد", "جزءان", "ثلاثة أجزاء", "أربعة أجزاء"],
      correct: 1,
    },
    {
      question: "أي قسم لا يندرج ضمن اختبار القدرات العامة؟",
      options: ["اللفظي", "الكمي", "الاستدلالي", "الكتابي"],
      correct: 3,
    },
    {
      question: "أفضل طريقة للتحضير لاختبار القدرات العامة هي…",
      options: ["قراءة الكتب النظرية فقط", "حل نماذج سابقة وتحديد نقاط الضعف", "التركيز على قسم واحد وإهمال الباقي", "لا شيء مما سبق"],
      correct: 1,
    },
    // يحتوي الاختبار على أسئلة اختيار من متعدد في الأقسام الكمية واللفظية
    {
      question: "ما نوع الأسئلة المستخدمة في اختبار القدرات العامة؟",
      options: ["مقالية", "اختيار من متعدد", "صح وخطأ", "أسئلة عملية"],
      correct: 1,
    },
    {
      question: "ما هي المدة الزمنية التقريبية لاختبار القدرات العامة؟",
      options: ["60 دقيقة", "90 دقيقة", "120 دقيقة", "180 دقيقة"],
      correct: 2,
    },
  ],
  tahsili: [
    {
      question: "أي من المواد التالية لا تندرج ضمن اختبار التحصيلي العلمي؟",
      options: ["الأحياء", "الكيمياء", "اللغة العربية", "الفيزياء"],
      correct: 2,
    },
    {
      question: "ما هو عدد الأسئلة التقريبي لكل قسم من أقسام التحصيلي؟",
      options: ["10", "20", "50", "100"],
      correct: 2,
    },
    {
      question: "لماذا يعد حل أسئلة من اختبارات سابقة مهماً للتحصيلي؟",
      options: ["للتعرف على نمط الأسئلة", "لزيادة السرعة والتركيز", "لتحديد نقاط الضعف", "كل ما سبق"],
      correct: 3,
    },
    {
      question: "أي من المواد التالية يتضمنها اختبار التحصيلي العلمي؟",
      options: ["الرياضيات والفيزياء والكيمياء والأحياء", "التاريخ والجغرافيا", "اللغة العربية والشريعة", "التربية الفنية"],
      correct: 0,
    },
    {
      question: "في أي مرحلة دراسية عادةً ما يُجرى اختبار التحصيلي؟",
      options: ["المرحلة المتوسطة", "المرحلة الثانوية", "المرحلة الجامعية", "المرحلة الابتدائية"],
      correct: 1,
    },
  ],
  cognitive: [
    {
      question: "كم قسم رئيسي في اختبار القدرة المعرفية؟",
      options: ["قسمان", "ثلاثة أقسام", "أربعة أقسام", "خمسة أقسام"],
      correct: 2,
    },
    {
      question: "أي مهارة يقيسها القسم المكاني؟",
      options: ["فهم النصوص", "حل المسائل الحسابية", "إدراك الأشكال والعلاقات", "الاستدلال المنطقي"],
      correct: 2,
    },
    {
      question: "أفضل استراتيجية للتحضير هي…",
      options: ["التركيز على قسم واحد", "إهمال الأساسيات", "التدريب على كل قسم وتحديد نقاط الضعف", "الاعتماد على الحفظ"],
      correct: 2,
    },
    {
      question: "أي من الأقسام التالية لا يندرج ضمن اختبار القدرة المعرفية؟",
      options: ["اللفظي", "الكمي", "المكاني", "البدني"],
      correct: 3,
    },
    {
      question: "الغرض الأساسي من اختبار القدرة المعرفية هو…",
      options: ["التوظيف في القطاع العام", "القبول الجامعي", "قياس الذكاء العاطفي", "اختيار التخصص"],
      correct: 0,
    },
  ],
  english: [
    {
      question: "ما هي أول خطوة لتعلم الإنجليزية للمبتدئين؟",
      options: ["تعلم الأزمنة المعقدة", "حفظ قاموس كامل", "تعلم الحروف والأصوات", "بدء المحادثة فوراً"],
      correct: 2,
    },
    {
      question: "أي مما يلي يساعد على تطوير مهارة الاستماع؟",
      options: ["مشاهدة أفلام بدون ترجمة", "قراءة نصوص فقط", "حل مسائل رياضيات", "الترجمة الحرفية"],
      correct: 0,
    },
    {
      question: "مدة الدورة التأسيسية في منصة ملهم للمبتدئين هي…",
      options: ["أسبوع", "شهر", "شهران", "ستة أشهر"],
      correct: 2,
    },
    {
      question: "أي من الأنشطة التالية يساعدك على بناء حصيلة لغوية قوية؟",
      options: ["قراءة كتب وقصص", "مشاهدة برامج أجنبية", "كتابة كلمات جديدة مع جمل", "كل ما ذكر"],
      correct: 3,
    },
    {
      question: "ما المهارات التي تركز عليها الدورة التأسيسية؟",
      options: ["القواعد فقط", "القراءة والكتابة", "الاستماع والتحدث", "جميع المهارات السابقة"],
      correct: 3,
    },
  ],
  ielts: [
    {
      question: "كم مهارة رئيسية يقيسها اختبار IELTS؟",
      options: ["اثنتان", "ثلاث", "أربع", "خمس"],
      correct: 2,
    },
    {
      question: "أي منصة توفر أكثر من 120 تمريناً في الأقسام الأربعة؟",
      options: ["Wall Street English", "British Council", "منصة روت", "ملهم"],
      correct: 0,
    },
    {
      question: "أفضل طريقة للتحضير لـ IELTS هي…",
      options: ["حل اختبارات تجريبية ومتابعة مع مدرس", "الاعتماد على الحفظ فقط", "تجاهل مهارة الكتابة", "عدم مراجعة الإجابات"],
      correct: 0,
    },
    {
      question: "ما هو نطاق درجات اختبار IELTS؟",
      options: ["0–5", "0–9", "1–10", "1–100"],
      correct: 1,
    },
    {
      question: "أي جزء من اختبار IELTS يستغرق حوالي دقيقتين للتحدث؟",
      options: ["جزء الكتابة", "قسم الاستماع", "جزء المحادثة – الجزء الثاني", "قسم القراءة"],
      correct: 2,
    },
  ],
};

// الدالة الرئيسية التي تبدأ الاختبار لدورة معينة
function startCourseTest(courseKey) {
  const questions = courseTests[courseKey];
  let currentQuestion = 0;
  let correctCount = 0;

  const container = document.getElementById(`test-container-${courseKey}`);
  const resultDiv = document.getElementById(`test-result-${courseKey}`);
  container.innerHTML = '';
  resultDiv.innerHTML = '';

  function showQuestion() {
    const q = questions[currentQuestion];
    const questionDiv = document.createElement('div');
    questionDiv.className = 'test-question';
    questionDiv.innerHTML = `<p>${q.question}</p>`;
    q.options.forEach((opt, index) => {
      const label = document.createElement('label');
      label.style.display = 'block';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${currentQuestion}`;
      input.value = index;
      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      questionDiv.appendChild(label);
    });
    const nextBtn = document.createElement('button');
    nextBtn.textContent = currentQuestion === questions.length - 1 ? 'إنهاء الاختبار' : 'التالي';
    nextBtn.onclick = () => {
      const selected = questionDiv.querySelector('input[type=radio]:checked');
      if (!selected) {
        alert('الرجاء اختيار إجابة قبل المتابعة');
        return;
      }
      if (parseInt(selected.value) === q.correct) {
        correctCount++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    questionDiv.appendChild(nextBtn);
    container.innerHTML = '';
    container.appendChild(questionDiv);
  }

  function showResult() {
    container.innerHTML = '';
    const score = Math.round((correctCount / questions.length) * 100);
    let recommendation = '';
    let packageName = '';
    if (score < 40) {
      packageName = 'الباقة الأساسية';
      recommendation = `درجتك هي ${score}%، واضح إنك تحتاج تأسيس قوي. ننصحك تشترك في ${packageName} عشان تبدأ من الصفر.`;
    } else if (score < 70) {
      packageName = 'الباقة المتقدمة';
      recommendation = `درجتك هي ${score}%، أنت جيد لكن تحتاج تطوير مهاراتك أكثر. ${packageName} بتساعدك ترفع مستواك.`;
    } else {
      packageName = 'باقة VIP';
      recommendation = `درجتك هي ${score}%، ممتاز! انت جاهز تقريبًا للاختبار. لكن باقة ${packageName} بتضمن لك أقصى استفادة.`;
    }
    resultDiv.innerHTML = `<p>${recommendation}</p><a href="payment.html" class="cta">اشترك الآن في ${packageName}</a>`;
  }
  // عرض أول سؤال
  showQuestion();
}

// استمع لأزرار بدء الاختبارات المختلفة
document.addEventListener('DOMContentLoaded', () => {
  Object.keys(courseTests).forEach((courseKey) => {
    const btn = document.getElementById(`start-test-${courseKey}`);
    if (btn) {
      btn.addEventListener('click', () => startCourseTest(courseKey));
    }
  });
});