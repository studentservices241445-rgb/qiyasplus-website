// notifications.js
// This script displays periodic social proof notifications to enhance trust.

// Array of predefined notification messages. Modify or extend as needed.
const notificationMessages = [
  "📢 اشترك محمد للتو في دورة القدرات العامة.",
  "🎉 ريم أنهت اختبار تحديد المستوى وحصلت على 85%.",
  "🔔 5 طلاب سجّلوا في دورة التحصيلي هذا الأسبوع.",
  "🏅 سارة حققت درجة 90 في تجربة اختبار STEP بعد تدريبنا.",
  "⭐ انضم عبدالله إلى دورة IELTS لتحسين درجته.",
  "✨ حازت نور على خصم 20% عند استخدام رمز الإحالة الخاص بها.",
  "📈 ارتفع متوسط درجات طلابنا بنسبة 15 نقطة هذا الشهر!",
  "💡 أحمد بدأ دورة تأسيس الإنجليزية لتقوية مهاراته اللغوية."
];

// Create and show a notification toast with the given message
function showNotification(message) {
  const toast = document.createElement('div');
  toast.className = 'notification-toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  // Automatically remove the toast after a few seconds
  setTimeout(() => {
    toast.remove();
  }, 8000);
}

// Display a random notification from the list
function displayRandomNotification() {
  const message = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];
  showNotification(message);
}

// Start showing notifications after an initial delay
setTimeout(() => {
  displayRandomNotification();
  // Repeat every 30 seconds
  setInterval(displayRandomNotification, 30000);
}, 10000);