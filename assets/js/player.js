$('#play').on('click', function() {
    document.getElementById('player').play();
});

$('#pause').on('click', function() {
    document.getElementById('player').pause();
});

$('#player').on('timeupdate', function() {
    $('#seekbar').attr("value", this.currentTime / this.duration);
});
