function updateCountdown() {
    // 목표 날짜: 2025년 3월 29일 오후 7시 (KST)
    const targetDate = new Date("2025-03-29T19:00:00+09:00"); // KST (UTC+9)
    const now = new Date(); // 현재 시간

    // 남은 시간 계산 (밀리초 단위)
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").textContent = "콘서트가 시작되었습니다!";
        return;
    }

    // 밀리초를 일, 시간, 분, 초로 변환
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // 텍스트로 표시
    document.getElementById("countdown").textContent = 
        `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
}

// 1초마다 갱신
setInterval(updateCountdown, 1000);

// 페이지 로드 시 즉시 실행
updateCountdown();

