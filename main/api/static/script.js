document.querySelector('#msg-body').focus();
document.querySelector('#msg-body').onkeyup = function(e) {
    if (e.keyCode === 13) {
        const messageInputDom = document.querySelector('#msg-body');
        const message = messageInputDom.value;
        
        messageInputDom.value = '';
    }
}