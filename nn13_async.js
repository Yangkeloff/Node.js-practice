var async = require('async');

function oneFun() {
    // setTimeout(function() {}, 1000);
    var i = 0;
    setInterval(function() {
        console.log('aaa' + new Date());
        i++;
        if (i == 3) {
            clearInterval(this);
        }
    }, 1000);
    console.log('oneFun');
}

function twoFun() {
    var j = 0;
    setInterval(function() {
        console.log('bbb' + new Date());
        j++;
        if (j == 3) {
            clearInterval(this);
        }
    }, 1000);
    console.log('oneFun 执行完成');
}

//oneFun();
//twoFun();

function exec() {
    async.series({
            one: function(done) {
                var i = 0;
                setInterval(function() {
                    console.log('一' + new Date());
                    i++;
                    if (i == 3) {
                        clearInterval(this);
                        done(null, '111完毕');
                    }
                }, 1000);
            },
            two: function(done) {
                var j = 0;
                setInterval(function() {
                    console.log('二' + new Date());
                    j++;
                    if (j == 3) {
                        clearInterval(this);
                        done(null, '222完毕');
                    }
                }, 1000);
            }
        },
        function(err, rs) {
            console.log(err);
            console.log(rs);
        }
    )
}
exec();
console.log('主进程执行完毕');