$(document).ready(function () {
  let container = $("#container");
  let items = "";
  fetch("../../../../json/productsEn.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((elem) => {
        items += `
                    <div class="w-full font-[byekan] flex justify-between rounded-3xl bg-gray-800 text-white border-2 border-white hover:text-yellow-400 transition-colors">
            <div class="w-4/12 flex"><img src="${elem["image"]}" alt="${elem["imageAlt"]}" class="rounded-tl-3xl rounded-bl-3xl"></div>
            <div class="w-7/12 flex flex-col p-3">
            <p class="text-4xl w-full flex flex-row-reverse">${elem["header"]}</p>
            <p class="text-xl w-full flex flex-row-reverse">${elem["description"]}</p>
            </div>
            
            </div>`;
      });
      container.html(items);
    });
});
