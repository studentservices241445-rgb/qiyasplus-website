// utils.js
// دوال مساعدة مشتركة للموقع

/**
 * تنسخ النص المحدد إلى الحافظة وتعرض رسالة تنبيه للمستخدم.
 * @param {string} text النص المراد نسخه
 */
function copyToClipboard(text) {
  if (!navigator.clipboard) {
    // في حال عدم دعم المتصفح لواجهة clipboard، نستخدم طريقة احتياطية
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      alert('تم نسخ البيانات بنجاح');
    } finally {
      document.body.removeChild(textarea);
    }
    return;
  }
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('تم نسخ البيانات بنجاح');
    })
    .catch(() => {
      alert('حدث خطأ أثناء النسخ، يرجى المحاولة مرة أخرى');
    });
}

// يمكن إضافة دوال مساعدة أخرى هنا لاحقاً