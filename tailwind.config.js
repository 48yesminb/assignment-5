document.addEventListener('DOMContentLoaded', () => {
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
    const callButtons = document.querySelectorAll('.call-btn');

    callButtons.forEach(button => {
        button.addEventListener('click', () => {
            const numberToCall = button.dataset.number;
            const serviceName = button.dataset.serviceName;
            
    
            window.location.href = `tel:${numberToCall}`;
            
            
            addToCallHistory(serviceName, numberToCall);
        });
    });
});