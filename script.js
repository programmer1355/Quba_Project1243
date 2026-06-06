window.onload = function() {
    
    // دالة التنبيه الإلزامية للمشروع
    setTimeout(function() {
        alert("ستقام فعالية الحفل الختامي في المدرسة بتاريخ 11/17");
    }, 500);

    // دالة الترحيب المتغيرة بتغير الوقت الحالي لمتصفح المستخدم
    function handleGreeting() {
        let currentHour = new Date().getHours();
        let displayTarget = document.getElementById("greetingMessage");
        
        if (currentHour < 12) {
            displayTarget.innerHTML = "✨ صباح الخير – مرحب بك في البوابة الرسمية ✨";
        } else {
            displayTarget.innerHTML = "✨ مساء الخير – مرحب بك في البوابة الرسمية ✨";
        }
    }

    handleGreeting();
};
