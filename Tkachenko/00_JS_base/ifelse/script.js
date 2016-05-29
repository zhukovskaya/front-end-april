// Task 1

function task1() {
    var num1 = document.getElementById('task1_1').value;
    var num2 = document.getElementById('task1_2').value;
    if (num1 > num2) {
        document.getElementById('task1_ta').innerHTML = num1 + ' > ' + num2;
    } else if (num1 < num2) {
        document.getElementById('task1_ta').innerHTML = num1 + ' < ' + num2;
    } else {
        document.getElementById('task1_ta').innerHTML = num1 + ' = ' + num2;
    }
}

// Task 2

function helloWorld() {
    var lang = document.getElementById('task2_1').value;
    switch (lang) {
        case 'kha':
            document.getElementById('task2_ta').innerHTML = 'Molo Lizwe';
            break;
        case 'sr':
            document.getElementById('task2_ta').innerHTML = 'Здраво Свете';
            break;
        case 'pus':
            document.getElementById('task2_ta').innerHTML = 'سلام نړی';
            break;
        default:
            document.getElementById('task2_ta').innerHTML = 'Error';
    }
}

// Task 3

function assignGrade() {
    var mark = document.getElementById('task3_1').value;
    switch (mark) {
        case '1':
            document.getElementById('task3_ta').innerHTML = 'A';
            break;
        case '2':
            document.getElementById('task3_ta').innerHTML = 'B';
            break;
        case '3':
            document.getElementById('task3_ta').innerHTML = 'C';
            break;
        case '4':
            document.getElementById('task3_ta').innerHTML = 'D';
            break;
        case '5':
            document.getElementById('task3_ta').innerHTML = 'F';
            break;
        default:
            document.getElementById('task3_ta').innerHTML = 'Error';
    }
}

// Task 11

function task11() {
    var a = document.getElementById('task11_1').value;
  output = (a === 'test')?'Верно!':'Неверно!';
  document.getElementById('task11_ta').innerHTML = output;
}

// Task 12

function task12() {
    var a = document.getElementById('task12_1').value;
  output = (a === '1')?'Верно!':'Неверно!';
  document.getElementById('task12_ta').innerHTML = output;
}

// Task 13

function task13() {
    var test = document.getElementById('task13_1').value;
  output = (test == 'true')?'Верно!':'Неверно!';
  document.getElementById('task13_ta').innerHTML = output;
}

// Task 14

function task14() {
    var test = document.getElementById('task14_1').value;
  output = (test != 'true')?'Верно!':'Неверно!';
  document.getElementById('task14_ta').innerHTML = output;
}

// Task 15

function task15() {
    var a = document.getElementById('task15_1').value;
    var b = document.getElementById('task15_2').value;
    var result = ((+a + +b) > 5)?5:(+a + +b)*10;
    document.getElementById('task15_ta').innerHTML = result;
}

// Task 16

function task16() {
    var a = document.getElementById('task16_1').value;
    if ((a > 0) && (a < 5)) {
        document.getElementById('task16_ta').innerHTML = 'Верно!';
    } else {
        document.getElementById('task16_ta').innerHTML = 'Неверно!';
    }
}

// Task 17

function task17() {
    var a = document.getElementById('task17_1').value;
    if ((a == 0) || (a == 2)) {
        document.getElementById('task17_ta').innerHTML = 'a / 10 = ' + (+a / 10);
    } else {
        document.getElementById('task17_ta').innerHTML = 'a + 7 = ' + (+a + 7);
    }
}

// Task 18

function task18() {
    var a = document.getElementById('task18_1').value;
    if ((a != 1) && (a != 3)) {
        document.getElementById('task18_ta').innerHTML = 'Верно!';
    } else {
        document.getElementById('task18_ta').innerHTML = 'Неверно!';
    }
}

// Task 19

function task19() {
    var a = document.getElementById('task19_1').value;
    var b = document.getElementById('task19_2').value;
    if ((a <= 1) && (b >= 3)) {
        document.getElementById('task19_ta').innerHTML = 'a + b = ' + (+a + +b);
    } else {
        document.getElementById('task19_ta').innerHTML = 'Неверно!';
    }
}

// Task 20

function task20() {
    var a = document.getElementById('task20_1').value;
    if ((a > 0) && (a < 5)) {
        document.getElementById('task20_ta').innerHTML = 'a + 1 = ' + (+a + 1);
    } else {
        document.getElementById('task20_ta').innerHTML = 'a + 5 = ' + (+a + 5);
    }
}

// Task 21

function task21() {
    var a = document.getElementById('task21_1').value;
    var b = document.getElementById('task21_2').value;
    if ((a > 2) && (a < 11) || (b >= 6) && (b < 14)) {
        document.getElementById('task21_ta').innerHTML = 'a + 2 = ' + (+a + 2);
    } else {
        document.getElementById('task21_ta').innerHTML = 'a + 5 = ' + (+a + 5);
    }
}
