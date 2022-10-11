<script>
  //    Stores  //
  import { cards } from "../../stores/cards";
  import { searchedCards } from "../../stores/searchedCards";
  // </>    Stores  //

  import CarouselItem from "./carouselItem.svelte";
  let cardArray = $cards;
  let random = Math.floor(Math.random() * cardArray.length - 29);
  let cardList = cardArray.slice(random, random + 29);
  searchedCards.set(cardList);
</script>

<div class="  container mx-auto">
  <div class="carousel w-full">
    <CarouselItem />
  </div>
</div>
