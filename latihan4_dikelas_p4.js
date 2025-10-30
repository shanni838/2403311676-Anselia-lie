import { login, getUser, getTabungan, getSaldo } from './latihan3_dikelas_p4';

async function main() {
  try {
    const response = await login("bixby"); 
    const key = getUser(response); 
    const tabungan = await getTabungan(key.key);
    const saldo = await getSaldo(tabungan);

    console.log(`Key: ${key.key}`);
    console.log(`Tabungan: ${tabungan}`);
    console.log(`Saldo: ${saldo}`);
  } catch (err) {
    console.log(err);
  }
}

main();
