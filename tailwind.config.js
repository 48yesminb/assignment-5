document.addEventListener('DOMContentLoaded', () => {
    // সকল "কপি" বোতাম নির্বাচন করা
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const numberToCopy = button.dataset.number;
            navigator.clipboard.writeText(numberToCopy).then(() => {
                alert('নম্বর কপি করা হয়েছে: ' + numberToCopy);
            }).catch(err => {
                console.error('কপি করতে ব্যর্থ: ', err);
            });
        });
    });

    // সকল "কল" বোতাম নির্বাচন করা
    const callButtons = document.querySelectorAll('.call-btn');

    callButtons.forEach(button => {
        button.addEventListener('click', () => {
            const numberToCall = button.dataset.number;
            const serviceName = button.dataset.serviceName;
            
            // মোবাইল ডিভাইসে ফোন অ্যাপ খুলবে
            window.location.href = `tel:${numberToCall}`;
            
            // কল হিস্টোরি আপডেট করা
            addToCallHistory(serviceName, numberToCall);
        });
    });
});