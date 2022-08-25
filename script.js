let wavesurfer = WaveSurfer.create({
  container: document.querySelector("#container"),
  waveColor: "#D6EB85",
  progressColor: "#D6EB85",
  responsive: true,
  barMinHeight: "10%",

  plugins: [
    WaveSurfer.regions.create({
      regions: [{ id: 1 }],
    }),
  ],
});
wavesurfer.load("./example_media_demo.wav");

//function addRegion(start, end, color) {
//  console.log(wavesurfer);
//}
wavesurfer.regions.add({
  id: "customer",
  start: 1,
  end: 2,
  drag: false,
});
wavesurfer.regions.add({
  id: "customer",
  start: 1,
  end: 2,
  drag: false,
});
wavesurfer.regions.add({
  id: "bot",
  start: 3,
  end: 4,
  drag: false,
});
wavesurfer.regions.add({
  id: "bot",
  start: 6,
  end: 7,
  drag: false,
});

wavesurfer.addRegion({
  id: "trimmer",
  start: 5,
  end: 8,

  resize: true,
});
function removeRegion(id) {
  let current = wavesurfer.regions.list;
  let newRegions = [];
  console.log(current);
}
removeRegion("df");

console.log(wavesurfer.regions);

let Allregions;
/**
 * run this function when ever we update the regions
 */
function updateRegions() {
  Allregions = document.querySelectorAll("region");
  for (let region of Allregions) {
    // console.log(region);
    region.onmousemove = function (e) {
      console.log(this.attributes["data-id"].value);
      const span = document.getElementById("currentregion");

      span.innerText = this.attributes["data-id"].value;
      span.style.top = `${e.y - 50}px`;
      span.style.left = `${e.x}px`;
    };
    region.onmouseleave = function () {
      document.getElementById("currentregion").innerText = "";
    };
  }
}
updateRegions();

console.log(wavesurfer);
