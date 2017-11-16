var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600
});

var backgroundColor = r.rect(0, 0, r.width, r.height)
  .fill(200)
  .stroke(false)


r.draw();