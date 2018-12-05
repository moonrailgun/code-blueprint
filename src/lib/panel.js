import * as d3 from 'd3';

export default function initPanel(svg) {
  const width = +svg.attr('width');
  const height = +svg.attr('height');

  const zoom = d3.zoom()
    .scaleExtent([0.5, 10])
    .translateExtent([[-100, -100], [width + 90, height + 100]])
    .on("zoom", zoomed);

  const x = d3.scaleLinear()
    .domain([-1, width + 1])
    .range([-1, width + 1]);

  const y = d3.scaleLinear()
    .domain([-1, height + 1])
    .range([-1, height + 1]);

  const xAxis = d3.axisBottom(x)
    .ticks((width + 2) / (height + 2) * 10)
    .tickSize(height)
    .tickPadding(8 - height);

  const yAxis = d3.axisRight(y)
    .ticks(10)
    .tickSize(width)
    .tickPadding(8 - width);

  const view = svg.append("rect")
    .attr("class", "view")
    .attr("x", 0.5)
    .attr("y", 0.5)
    .attr("width", width - 1)
    .attr("height", height - 1);

  const gX = svg.append("g")
    .attr("class", "axis axis--x")
    .call(xAxis);

  const gY = svg.append("g")
    .attr("class", "axis axis--y")
    .call(yAxis);

  svg.call(zoom);

  function zoomed(svg) {
    view.attr("transform", d3.event.transform);
    gX.call(xAxis.scale(d3.event.transform.rescaleX(x)));
    gY.call(yAxis.scale(d3.event.transform.rescaleY(y)));
  }
}
