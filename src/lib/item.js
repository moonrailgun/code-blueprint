export const createItem = function(view, {x, y}) {
  return new BaseItem(view, x, y);
}

export class BaseItem {
  constructor(view, x = 0, y = 0) {
    this.view = view;
    this.x = x;
    this.y = y;

    return this.createItem();
  }

  getInputSlot() {
    // return [];

    // TEST:
    return [
      {
        name: 'aaaa'
      },
      {
        name: 'bbbb'
      }
    ]
  }

  getOutputSlot() {
    // return [];

    // TEST:
    return [
      {
        name: 'cccc'
      },
      {
        name: 'dddd'
      },
      {
        name: 'eeee'
      },
      {
        name: 'ffff'
      },
      {
        name: 'gggg'
      },
      {
        name: 'hhhh'
      },
    ]
  }

  createItem() {
    const {
      view,
      x,
      y,
    } = this;
    const item = view.append('g')
      .attr('transform', `translate(${x} ${y})`)

    const rect = item.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('width', 200)
      .attr('height', 100)
      .attr('fill', 'red')

    this.createSlot(item, rect);

    this.item = item;
    return item;
  }

  // 创建slot并重设slot
  createSlot(item, rect) {
    const inputSlot = this.getInputSlot();
    console.log('inputSlot', inputSlot);
    const outputSlot = this.getOutputSlot();

    const maxWidth = rect.attr('width');
    // input
    for (let index in inputSlot) {
      let slot = inputSlot[index];

      let g = item.append('g')
        .attr('transform', `translate(0 ${5 + 20 * +index})`)

      g.append('circle')
        .attr('cx', 10)
        .attr('cy', 10)
        .attr('r', 5)
        .attr('fill', 'white')

      g.append('text')
        .attr('x', 20)
        .attr('y', 15)
        .attr('fill', 'black')
        .text(slot.name)
    }

    // output
    for (let index in outputSlot) {
      let slot = outputSlot[index];

      let g = item.append('g')

      let text = g.append('text')
        .attr('x', 20)
        .attr('y', 15)
        .attr('fill', 'black')
        .text(slot.name)

      let textSize = text.node().getBBox();

      g.append('circle')
        .attr('cx', textSize.x + textSize.width + 10)
        .attr('cy', 10)
        .attr('r', 5)
        .attr('fill', 'white')

      let gsize = g.node().getBBox();
      g.attr('transform', `translate(${maxWidth - (gsize.width + gsize.x) - 10} ${5 + 20 * +index})`)
    }

    rect.attr('height', Math.max(
      100,
      (inputSlot.length + 1) * 20,
      (outputSlot.length + 1) * 20
    ));
  }
}
