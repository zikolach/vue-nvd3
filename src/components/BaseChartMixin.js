import d3 from 'd3';

export default {
  props: {
    model: {type: Array},
    height: {type: String, default: '300px'}
  },
  data () {
    return {
      chartRef: undefined
    }
  },
  watch: {
    model () {
      if (this.chartRef) {
        this.redraw(this.chartRef)
      }
    }
  },
  methods: {
    redraw (chart) {
      d3.select(this.$refs.chart)
        .style('height', this.height)
        .datum(this.model)
        .transition()
        .duration(500)
        .call(chart)
    }
  },
  render(h) {
    return h('svg', {ref: 'chart'});
    // return <svg ref="chart">
    // </svg>
  }
}
