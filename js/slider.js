function scrollSlider(direction) {
    const container = document.getElementById("deliverySlider");
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  }