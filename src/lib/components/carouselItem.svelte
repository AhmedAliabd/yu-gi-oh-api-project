<script>
  import { searchedCards } from "../../stores/searchedCards";
  let arr;
  const chunks = (images, chunck) => {
    arr = [];
    console.log("111");
    for (let i = 0; i < images.length; i += chunck) {
      arr.push(images.slice(i, i + chunck));
    }
  };
  searchedCards.subscribe((val) => {
    console.log("<<>>>>", val);
    let images = val;
    chunks(images, 3);
    console.log("?????", arr);
  });
</script>

{#each arr as slide, index}
  <div id={`slide${index + 1}`} class="carousel-item relative w-full">
    {#each slide as img}
      <img
        alt="card"
        src={img.card_images[0].image_url}
        class="mx-auto object-contain h-5/6 w-2/6"
      />
    {/each}
    <div
      class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
    >
      <a href={`#slide${index}`} class="btn btn-circle">❮</a>
      <a href={`#slide${index + 2}`} class="btn btn-circle">❯</a>
    </div>
  </div>
{/each}
