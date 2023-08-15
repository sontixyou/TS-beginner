// 非同期でAPIにリクエストを投げて値を取得する処理
function request1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function request2(result1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result1 + 1);
    }, 1000);
  });
}

// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function request3(result2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result2 + 2);
    }, 1000);
  });
}

request1()
  .then((result1) => {
    return request2(result1);
  })
  .then((result2) => {
    return request3(result2);
  })
  .then((result3) => {
    console.log(result3);
    // @log: 4
  });
