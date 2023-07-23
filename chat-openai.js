
const interval = setInterval(() => {
    const chat = document.querySelector('ol li a');

    if (!chat) {
        clearInterval(interval);
        return;
    }

    chat.click();

    const timeout1 = setTimeout(() => {
        const chatButtons = document.querySelectorAll('ol li button')
        const trashIcon = chatButtons[2];
        
        trashIcon.click();

        const timeout2 = setTimeout(() => {
            const approveIcon = document.querySelectorAll('ol li button')[0];
            
            approveIcon.click();

            clearTimeout(timeout2);
        }, 500);

        clearTimeout(timeout1);
    }, 500)
}, 3000)



