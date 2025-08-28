document.addEventListener('DOMContentLoaded', () => {
    const callButtons = document.querySelectorAll('.call-btn');
    const copyButtons = document.querySelectorAll('.copy-btn');
    const historyList = document.getElementById('call-history-list');
    const noHistoryMsg = document.getElementById('no-history-msg');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    
    let callHistory = JSON.parse(localStorage.getItem('callHistory')) || [];

    const renderHistory = () => {
        historyList.innerHTML = '';
        if (callHistory.length === 0) {
            historyList.appendChild(noHistoryMsg);
        } else {
            callHistory.forEach(item => {
                const newItem = document.createElement('div');
                newItem.className = 'flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0';
                newItem.innerHTML = `
                    <div>
                        <div class="font-semibold text-gray-800">${item.serviceName}</div>
                        <div class="text-sm text-gray-500">${item.number}</div>
                    </div>
                    <div class="text-sm text-gray-400">${item.time}</div>
                `;
                historyList.appendChild(newItem);
            });
        }
    };

    
    renderHistory();

    
    callButtons.forEach(button => {
        button.addEventListener('click', () => {
            const numberToCall = button.dataset.number;
            const serviceName = button.dataset.serviceName;
            
            
            const newHistoryItem = {
                serviceName,
                number: numberToCall,
                time: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })
            };
            
            
            callHistory.unshift(newHistoryItem);
            
            
            if (callHistory.length > 10) {
                callHistory.pop();
            }

            localStorage.setItem('callHistory', JSON.stringify(callHistory));
            
            
            renderHistory();
            
            
            window.location.href = `tel:${numberToCall}`;
        });
    });

    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const numberToCopy = button.dataset.number;
            navigator.clipboard.writeText(numberToCopy).then(() => {
                alert(`"${numberToCopy}" নম্বরটি কপি করা হয়েছে!`);
            }).catch(err => {
                console.error('কপি করতে ব্যর্থ: ', err);
            });
        });
    });

    clearHistoryBtn.addEventListener('click', () => {
        localStorage.removeItem('callHistory');
        callHistory = [];
        renderHistory();
    });
});