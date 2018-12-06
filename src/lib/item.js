export const createItem = function(view, {x, y}) {
  const item = view.append('g')
    .attr('transform', `translate(${x} ${y})`)

  const rect = item.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('rx', 10)
    .attr('ry', 10)
    .attr('width', 100)
    .attr('height', 100)
    .attr('fill', 'red')

  item.append('circle')
    .attr('cx', 20)
    .attr('cy', 20)
    .attr('r', 10)
    .attr('fill', 'white')
}
