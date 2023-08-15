// 非同期でAPIにリクエストを投げて値を取得する処理
function request1() : Promise<number> {
  return new Promise((resolve)  => {
    setTimeout(() : void => {
      resolve(1);
    }, 1000);
  });
}

// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function request2(result1 : number) : Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() : void => {
      resolve(result1 + 1);
    }, 1000);
  });
}

// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function request3(result2 : number) : Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() : void => {
      resolve(result2 + 2);
    }, 1000);
  });
}

request1()
  .then((result1 : number) : Promise<number> => {
    return request2(result1);
  })
  .then((result2 : number) : Promise<number> => {
    return request3(result2);
  })
  .then((result3 : number) : void => {
    console.log(result3);
    // @log: 4
  });
