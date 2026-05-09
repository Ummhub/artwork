const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}

const target = new Date('2026-10-30T00:00:00');

function update() {
  const now = new Date();
  const diff = target - now;

  const days    = Math.floor(diff / 86400000);
  const hours   = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById('days').textContent    = days;
  document.getElementById('hours').textContent   = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(update, 1000);
update();

<script>
  const whoBtn = document.getElementById('whoBtn');
  const whoText = document.getElementById('whoText');

  whoBtn.addEventListener('mouseleave', function () {
    whoBtn.textContent = 'who am I';
    whoText.innerHTML = '제가 궁금하시다면, 커서를 올려주세요';
  });
  whoBtn.addEventListener('mouseenter', function () {
    whoBtn.textContent = '안녕하세요. 송정음입니다.';
    whoText.innerHTML = '현재 저는 한국폴리텍 비주얼커뮤니케이션을 전공하고 있습니다.';
  });

   const whatBtn = document.getElementById('whatBtn');
  const whatText = document.getElementById('whatText');

    whatBtn.addEventListener('mouseenter', function () {
    whatBtn.textContent = '저에게 디자인이란...';
    whatText.innerHTML = '시각디자인이란 또 다른 언어의 형태라고 생각합니다';
  });

  whatBtn.addEventListener('mouseleave', function () {
    whatBtn.textContent = 'What design means to me';
    whatText.innerHTML = '저에게 디자인이란...';
  });

   const HowBtn = document.getElementById('HowBtn');
  const HowText = document.getElementById('HowText');

    HowBtn.addEventListener('mouseenter', function () {
    HowBtn.textContent = '앞으로 제가 하고 싶은 디자인은';
    HowText.innerHTML = '시각디자인이란 또 다른 언어의 형태라고 생각합니다';
  });

  HowBtn.addEventListener('mouseleave', function () {
    HowBtn.textContent = 'Next Step';
    HowText.innerHTML = '어떤 디자이너가 되고 싶은지';
  });
 
 
</script>