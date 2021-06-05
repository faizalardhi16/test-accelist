//Jawaban SOal No 8

const x = (i) => {
  if (i % 2 == 0) {
    return z();
  } else {
    return y() + " " + z();
  }
};

const y = () => {
  return "Output Y";
};
const z = () => {
  return "Output Z";
};

console.log(x(1));

//Jawaban SOal No 9

const penjualan = (pembelian) => {
  if (pembelian > 100) {
    return `Barang Dibeli : ${pembelian}
          Cashback : 20 
              Total Barang : ${pembelian + 20}`;
  } else if (pembelian > 50 && pembelian < 100) {
    return `Barang Dibeli : ${pembelian}
              Cashback : 15 
      1   Total Barang : ${pembelian + 15}`;
  } else if (pembelian > 10 && pembelian < 50) {
    return `Barang Dibeli : ${pembelian}
          Cashback : 10 
          Total Barang : ${pembelian + 10}`;
  } else if (pembelian < 10) {
    return `Barang Dibeli : ${pembelian}
          Cashback : 5 
          Total Barang : ${pembelian + 5}`;
  } else {
    return "Tidak Ada Diskon";
  }
};

console.log(penjualan(40));

//soal no 11
const input = (N) => {
  let x = 1;

  for (let i = N; 0 < i; i--) {
    if (N > 1) {
      x = x * i;
      i = i - 1;
      return i;
    } else {
      return x;
    }
  }
};

console.log(input(5));
