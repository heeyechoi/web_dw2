// 클릭 위치에 번지는 잉크 효과 만들기
function onMouseDown(event) {
  let maxRadius = 100;
  let circle = new Path.Circle({
    center: event.point,
    radius: 0,
    fillColor: new Color(0, 0, 0, 0.5), // 반투명 블랙
    blendMode: 'multiply',
    shadowColor: new Color(0, 0, 0),
    shadowBlur: 20
  });

  circle.tween(
    { radius: 0 },
    { radius: maxRadius },
    {
      duration: 500,
      easing: 'easeInOutCubic',
      update: function(event) {
        circle.scale(1.02);
        circle.fillColor.alpha *= 0.97;
      },
      complete: function() {
        circle.remove(); // 퍼진 후 사라지게
      }
    }
  );
}
