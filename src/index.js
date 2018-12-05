import * as d3 from 'd3';
import initPanel from './lib/panel';
import './index.css';

window.bpversion = {
  d3: d3.version,
}
console.log('Code Blueprint!');

const svg = d3.select('svg');
svg.call(initPanel);
