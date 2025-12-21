const data = require("./modulesData.json");

function mean(arr){ return arr.reduce((a,b)=>a+b,0)/arr.length; }
function log(x){ return Math.log(x); }
function R(lambda, t){ return Math.exp(-lambda*t); }

function fitLogLinear(xs, ys){
  const mx = mean(xs), my = mean(ys);
  const num = xs.map((x,i)=>(x-mx)*(ys[i]-my)).reduce((a,b)=>a+b,0);
  const den = xs.map(x=>(x-mx)**2).reduce((a,b)=>a+b,0);
  const beta1 = num/den;
  const beta0 = my - beta1*mx;
  return { beta0, beta1 };
}

function simulateLambda(logLambda, sigma=0.25, draws=800){
  const samples = [];
  for(let i=0;i<draws;i++){
    const s = logLambda + (Math.random()*sigma*2 - sigma);
    samples.push(Math.exp(s));
  }
  return samples;
}

describe("Modelo predictivo personalizado para binarySearchLogic.js", () => {
  const lambdas = data.map(d => ({ mod: d.mod, lambda: d.fails / d.hours }));

  const xs = data.map(d => log(d.usage));
  const ys = lambdas.map(l => log(l.lambda));
  const { beta0, beta1 } = fitLogLinear(xs, ys);

  it("predice confiabilidad por módulo en t=100 con IC 95%", () => {
    const t = 100;
    data.forEach((d) => {
      const logLambdaHat = beta0 + beta1 * log(d.usage);
      const lambdaHat = Math.exp(logLambdaHat);

      const Rhat = R(lambdaHat, t);

      const sims = simulateLambda(logLambdaHat, 0.25, 800).map(l => R(l, t));
      sims.sort((a,b)=>a-b);
      const low = sims[Math.floor(0.025*sims.length)];
      const high = sims[Math.floor(0.975*sims.length)];

      console.log(`[${d.mod}] lambda_hat=${lambdaHat.toFixed(6)} R(100)=${Rhat.toFixed(4)} IC95%=[${low.toFixed(4)}, ${high.toFixed(4)}]`);
    });
  });
});
