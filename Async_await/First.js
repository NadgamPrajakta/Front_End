function simpleAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'ok' });
    }, 500);
  });
}

function usingThen() {
  const promises = [];

  for (let i = 0; i < 100; i++) {
    promises.push(simpleAsync());
  }

  Promise.all(promises)
    .then((res) => {

      for (const r of res) {
        console.log(r);
      }
    });
}

async function usingAsync() {

  for (let i = 0; i < 100; i++) {
    const r = await simpleAsync();
    console.log(r);
  }
}

// usingThen();
usingAsync();