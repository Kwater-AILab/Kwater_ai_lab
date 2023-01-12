# Kwater AI Lab homepage. <br>
한국수자원연구원 AI연구센터 누리집 입니다. <br>
K-water 누리집 [바로가기](https://kwater-ailab.github.io/Kwater_ai_lab/)

# TO DO LIST
- 전반적인 레이아웃 재배열 (▲)
- 화면크기에 따라 레이아웃 배열[모바일] (▲)
- Our Seminar 디자인(▲)
- Our Project 디자인(▲)
- Our Member 디자인(▲)
  > 카드내용 축약(x) <br>
  > 슬라이드 기능 추가(x) <br>
  > next 버튼 추가(x)

# 추가기능
- 방문자 카운터 (●)
- TOP 기능 [오른쪽 하단 버튼 누르면 HOME 가기] (●)

body {
padding: 60px;
  background: #f3f3f3;
  min-height: 100vh;
}

@keyframes sparkle {
  from {
    background-position: 0% 100%;
  }
  to {
    background-position: 200% 100%;
  }
}

$c1: #7FEFBD;
$c2: #FFF689;
$c3: #EC0B43;

// $c1: #F8333C;
// $c2: #2B9EB3;
// $c3: #44AF69;

.test {
  background: white;
  display: inline-block;
  padding: 1em;
  font-family: Helvetica Neue;
  border-radius: 4px;
  position: relative;
  &:before {
    animation: sparkle 4s infinite linear;
    background: linear-gradient(
    90deg,
    $c1 0%,
    $c2 11%,
    $c3 22%,
    $c1 33%,
    $c2 44%,
    $c3 55%,
    $c1 66%,
    $c2 77%,
    $c3 88%,
    $c1 100%
    );
    background-size: 300% 100%;
    content: '';
    position: absolute;
    left: 0;
    t
