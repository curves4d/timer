let dis_css = {
    'background-color': '#246973',
    'color': 'white',
    'font-size': '24px',
    'position': 'fixed',
    'padding': '10px',
    'align-items': 'center',
    'display': 'flex',
    'flex-direction': 'column',
    'z-index': '9999999'
}

let dis = $('<div><div id="main_time"></div><div id="sub"></div></div>').attr('id', 'timer').css(dis_css);

let timeNow = new Date();

$(function() {
    $(document.body).prepend(dis);
    $('#sub').css({
        'font-size': '10px'
    });
    dis.draggable();
});


let endTime = new Date();
endTime.setHours(18);
endTime.setMinutes(0);
endTime.setSeconds(0);
endTime.setMilliseconds(0);

let runFunc = setInterval(() => {
    if((timeNow.getHours() > 8) && (timeNow.getHours() < 18)) {
        let milliLeft = endTime - timeNow;
        let halfHoursLeft = milliLeft / 1000 / 1800;
        let intHalfHoursLeft = Math.floor(halfHoursLeft);
        let secondsLeft = Math.floor(1800*(halfHoursLeft - intHalfHoursLeft));
        let minsLeft = Math.floor(Math.max(secondsLeft/60, 0));
        let remSeconds = secondsLeft - 60*minsLeft;
        $('#main_time').text(intHalfHoursLeft + '/18');
        $('#sub').text(minsLeft + ' minutes and ' + remSeconds + ' seconds till next round')
        timeNow = new Date();
    }
}, 1000);
