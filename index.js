async function start() {
  console.log("a");
  console.log("b");
  const b = new Promise((resolve, reject) => {
    setTimeout(() => resolve(console.log("c")), 3000);
  })
  await b;
  console.log("d");
}

async function startTwo() {
console.log('a');
console.log('b');
const c = new Promise((res, rej) => {
    setTimeout(() => res(console.log('c')), 3000)
})
await c
const d = new Promise((res, rej) => {
    setTimeout(() => res(console.log('d')), 0)
})
await d
console.log('e');
}
startTwo();