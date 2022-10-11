<script>
  let searchTerm = "";
  import { cards } from "../../../stores/cards";
  import { searchedCards } from "../../../stores/searchedCards";
  let card = $cards;
  const seachMethod = () => {
    if (searchTerm.length > 2) {
      let result = card.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      searchedCards.set(result);
      console.log("WMWMWMW", $searchedCards);
    }
  };
</script>

<div class="  container mx-auto mb-5">
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Svelte Project</a>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input
          bind:value={searchTerm}
          on:input={() => seachMethod()}
          type="text"
          placeholder="Search"
          class="input input-bordered"
        />
      </div>
    </div>
  </div>
</div>
