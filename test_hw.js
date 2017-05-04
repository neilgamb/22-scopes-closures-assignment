import test from 'ava';
let hw = require('./hw');


test ('counter', function (t){
    let c = hw.counter(2);
    t.deepEqual(c.next(), 3);
    t.deepEqual(c.next(), 4);


    let b = hw.counter(7);
    t.deepEqual(b.next(), 8);
});

test ('multiply', function (t){
    let by5 = hw.multiply(5);
    t.deepEqual(by5(2), 10);
});

test ('discount', function (t){
    let tot = hw.total(20);
    t.deepEqual(tot.discount(.5), 10);
    t.deepEqual(tot.discount(.2), 16);
});

test ('user', function (t){
    let user = hw.user();
    t.deepEqual(user.getName(), null);
    t.deepEqual(user.setName('neilson'), true);
    t.deepEqual(user.getName(), 'neilson');
    t.deepEqual(user.setName('123 hi'), false);
    t.deepEqual(user.getName(), 'neilson');
});

test ('color', function (t){
    let color = hw.color(150, 200, 18);
    t.deepEqual(color.incrRed(12));
    t.deepEqual(color.red(), 162);

    t.deepEqual(color.incrGreen(60));
    t.deepEqual(color.green(), 255);

    t.deepEqual(color.incrBlue(-100));
    t.deepEqual(color.blue(), 0);

    t.deepEqual(color.incrBlue(50));
    t.deepEqual(color.blue(), 50);
});


test ('lives', function (t){
    let lives = hw.lives(5);

    t.deepEqual(lives.died());
    t.deepEqual(lives.left(), 4);

    t.deepEqual(lives.died());
    t.deepEqual(lives.left(), 3);

    t.deepEqual(lives.restart());
    t.deepEqual(lives.left(), 5);
});

test ('message', function (t){
    let message = hw.messages('message');
    t.deepEqual(message.getMessage(), '[1] message');

    let message2 = hw.messages('another message');
    t.deepEqual(message.getMessage(), '[2] message');

    let message3 = hw.messages('yet another message');
    t.deepEqual(message.getMessage(), '[3] message');
});

test ('message', function(t){
    let pocket = hw.pocket(50);

    t.deepEqual(pocket.buy());
    t.deepEqual(pocket.coins(), 40);
    t.deepEqual(pocket.trinkets(), 1);

    t.deepEqual(pocket.buy());
    t.deepEqual(pocket.coins(), 30);
    t.deepEqual(pocket.trinkets(), 2);

    t.deepEqual(pocket.sell());
    t.deepEqual(pocket.coins(), 35);
    t.deepEqual(pocket.trinkets(), 1);

    t.deepEqual(pocket.sell());
    t.deepEqual(pocket.coins(), 40);
    t.deepEqual(pocket.trinkets(), 0);

    t.deepEqual(pocket.sell(), "Not enough trinkets");
    t.deepEqual(pocket.coins(), 40);
    t.deepEqual(pocket.trinkets(), 0);
});

test ('account', function(t){
    let acct = hw.account(200);

    t.deepEqual(acct.withdraw(100), "successful withdrawal");
});