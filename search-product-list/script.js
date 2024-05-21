const searchProduct = () => {
  const search = document.getElementById("search-product").value.toUpperCase();
  const productbox = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const pname = document.getElementsByTagName("span");
  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("span")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(search) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
