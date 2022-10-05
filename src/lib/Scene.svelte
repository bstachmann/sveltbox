

<script>
  var s = 42;

  const tuwat = () => {
    s += 3;
  }
  const tuwat2 = () => {
    s -= 3;
  }
</script>

<button on:click={tuwat}>KLICKIT</button>
<button on:click={tuwat2}>KLOCKIT</button>

<svg width="400" height="400">
  <circle r="{s}" stroke="green" stroke-width="4" />
</svg>

<p>
  HUHU
  {s}
</p>

<style>
circle {
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

@keyframes example {
  0%   {fill:red; cx:200; cy:200;}
  25%  {fill:yellow; cx:300; cy:300;}
  50%  {fill:blue; cx:300; cy:100;}
  75%  {fill:green; cx:100; cy:100;}
  100% {fill:red; cx:200; cy:200;}
}
</style>