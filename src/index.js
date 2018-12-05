import * as d3 from 'd3';
import initPanel from './lib/panel';
import { createItem } from './lib/item';
import './index.css';

window.bpversion = {
  d3: d3.version,
}
console.log('Code Blueprint!');

const svg = d3.select('svg');
const panel = initPanel(svg, {
  onClick: function([x, y]) {
    panel.call(createItem, {x, y});
  }
});
