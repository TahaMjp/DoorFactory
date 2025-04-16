$(document).ready(function () {
  let container = $("#container");
  let items = "";
  fetch("../../../../json/productsEn.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((elem) => {
        items += `
                    <div class="w-4/12 font-[byekan] flex flex-col rounded-3xl bg-gray-800 text-white hover:text-yellow-400 transition-colors">
            <img src="${elem["image"]}" alt="${elem["imageAlt"]}" class="rounded-t-3xl transition-all duration-300 ease-in-out" />
            <p class="text-4xl w-full p-3 flex flex-row-reverse">${elem["header"]}</p>

            
            </div>`;
      });
      container.html(items);
    });
});
