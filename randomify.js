const RandomOrg = require('random-org');
const maths = require('math');


let random = new RandomOrg({ apiKey: 'b8a7f51a-ad52-4121-ad82-70b2440ace8f' });
class RandomUnify {

    // random.generateIntegers({ min: 1, max: 99, n: 2 })
    // .then(function(result) {
    //   return(result.random.data); // [55, 3]
    // });


// # - An RGB bitmap picture of 128x128 pixels. (70 points)

  bitmap(){
    let width = 128;
    let height = 128;

  }

  // render(){
  //   let image = this.bitmap();
  //   return(
  //     {image}
  //   );
  // }

// #
// # - A white noise WAV sound sample of 3 seconds (70 points)

// #
// # - An RSA key pair. (100 points)
  lcm(x, y){
    Math.abs((x * y) / this.gcd_two_numbers(x, y));
}

  gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

    mod = (a, b) => {
    i = 0
    while (i < b){
      if (a*i%b === 1){
        return i
      }
      i += 1
    }
  }

  rsaPair(){
    let arr = random.generateIntegers({ min: 1, max: 99, n: 2 });
    let p = arr[0];
    let q = arr[1];
    let n = p*q;
    let toi = maths.lcm(p-1,q-1);
    let e = random.generateIntegers({ min: 1, max: n, n: 1 })
    let d = mod(e, toi);
    let pub = [n, e];
    let priv = [n, d];
    return [pub, priv];
  }

}

export default RandomUnify;
