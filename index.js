//creating the map

// var svg = d3.select("#map");
// var width = svg.style('width');
// var height = svg.style('height');

// var projection = d3.geo.albersUsa()
//     .scale(1000)
//     .translate([width / 2, height / 2]);

// var path = d3.geo.path()
//     .projection(projection);

// d3.json("/mbostock/raw/4090846/us.json", function(error, us) {
//   if (error) throw error;

//   svg.insert("path", ".graticule")
//       .datum(topojson.feature(us, us.objects.land))
//       .attr("class", "land")
//       .attr("d", path);

//   svg.insert("path", ".graticule")
//       .datum(topojson.mesh(us, us.objects.counties, function(a, b) { return a !== b && !(a.id / 1000 ^ b.id / 1000); }))
//       .attr("class", "county-boundary")
//       .attr("d", path);

//   svg.insert("path", ".graticule")
//       .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
//       .attr("class", "state-boundary")
//       .attr("d", path);
// })

