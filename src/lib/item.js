export const createItem = function(view, {x, y}) {
  const rect = view.append('rect')
    .attr('x', x)
    .attr('y', y)
    .attr('rx', 10)
    .attr('ry', 10)
    .attr('width', 100)
    .attr('height', 100)
    .attr('fill', 'red')

  rect.append('circle')
    .attr('cx', 10)
    .attr('cy', 10)
    .attr('r', 10)
}
