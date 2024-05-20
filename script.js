// Завдання 1: Цикл while
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Завдання 2: Цикл do...while
let j = 10;
do {
  console.log(j);
  j--;
} while (j >= 1);

// Завдання 3: Цикл for
for (let k = 2; k <= 20; k += 2) {
  console.log(k);
}

// Завдання 4: Вкладений цикл
for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= 10; b++) {
    console.log(`${a} * ${b} = ${a * b}`);
  }
}

// Завдання 5: Цикл з використанням continue
for (let c = 1; c <= 10; c++) {
  if (c % 3 === 0) {
    continue;
  }
  console.log(c);
}

// Завдання 6: Цикл з використанням break
let d = 1;
while (d <= 10) {
  if (d === 7) {
    break;
  }
  console.log(d);
  d++;
}
