// 클릭하면 검은색 잉크가 번지는 효과
function onMouseDown(event) {
  let maxRadius = 100;
  let circle = new Path.Circle({
    center: event.point,
    radius: 0,
    fillColor: 'black',
    shadowColor: 'black',
    shadowBlur: 30,
    blendMode: 'multiply'
  });

  circle.tween(
    { radius: 0 },
    { radius: maxRadius },
    {
      duration: 500,
      easing: 'easeInOutCubic',
      update: function() {
        circle.scale(1.02);
      },
      complete: function() {
        circle.remove(); // 확산 후 사라지기
      }
    }
  );
}
