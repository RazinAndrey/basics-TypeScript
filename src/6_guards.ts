// вспомогательные конструкции, которые позволяют проверять типы 
function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim()
}

class MyResponse {
    header = 'response header';
    result = 'response  result';
}

class MyError {
    header = 'error header';
    message = 'error message';
}

// фун, которая обрабатывает ответ и ошибку
function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

/////////////////

type AlertType = 'succcess' | 'danger' | 'warning';
function setAlertType(type: AlertType) {
    // code
}

setAlertType('succcess');
setAlertType('warning');
// setAlertType('ddd'); // err