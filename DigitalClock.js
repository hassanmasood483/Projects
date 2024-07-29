const promise = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(new Date());
    }, 1000);
  });
};

async function recursive(n) {
  if (n < 0) {
    return false;
  } else {
    try {
      await promise().then((res) => {
        console.log(res);
        n = n + 1;
        recursive(n);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
recursive(1);
