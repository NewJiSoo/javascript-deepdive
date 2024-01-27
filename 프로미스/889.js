const wrongUrl = 'https://jsonplaceholder.typicode.com/XXX/1';

// 부적절한 URL이 지정되었기 때문에 에러가 발생한다.
promiseGet(wrongUrl).then(
    res => console.log(res),
    err => console.error(err)
); // Error: 404


const wrongUrl2 = 'https://jsonplaceholder.typicode.com/XXX/1';

// 부적절한 URL이 지정되었기 때문에 에러가 발생한다.
promiseGet(wrongUrl2)
    .then(res => console.log(res))
    .catch(err => console.error(err)); // Error: 404