const token = ~~[Math.random() * 1e8].toString(16);
const tabungan = [1000000, 2000000, 3000000];

function login(user) {
  console.log('Login berhasil!');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user != 'biky') reject('User tidak ditemukan');
      resolve(token);
    }, 2000);
  });
}

function getUser(token) {
  if (token) {
    return { key: "C3541" };
  }
}

function getTabungan(key) {
  return new Promise((success, reject) => {
    if (key) {
      setTimeout(() => {
        success(tabungan);
      }, 2000);
    } else {
      reject('User tidak ditemukan');
    }
  });
}

function getSaldo(tabungan) {
  return new Promise((success) => {
    if (tabungan) {
      setTimeout(() => {
        let total = 0;
        tabungan.forEach((item) => {
          total += item;
        });
        success(total);
      }, 2000);
    } else {
      success(0);
    }
  });
}

async function main() {
  try {
    const response = await login("biky");
    const key = getUser(response.token);
    const tabungan = await getTabungan(key);
    const saldo = await getSaldo(tabungan);

    console.log(`Key: ${key.key}`);
    console.log(`Tabungan: ${tabungan}`);
    console.log(`Saldo: ${saldo}`);
  } catch (err) {
    console.log(err);
  }
}

main();
