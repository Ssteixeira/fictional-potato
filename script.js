function showMessage(type) {
    const message = document.getElementById('message');
    let text = '';
  
    switch(type) {
      case 'gift':
        text = 'Here is my heart, just for you 💝';
        break;
      case 'miss':
        text = 'I miss you more than words can say... 💌';
        break;
      case 'love':
        text = 'I love you! 💖\nIch liebe dich (German) \nKocham Cię (Polish) ';
        break;
    }
  
    message.textContent = text;
    message.classList.remove('hidden');
    message.classList.add('show');
  }
  