import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import VueNVD3 from '@/components'
import LineChart from '@/examples/LineChart.vue'
import Vue from "vue";

Vue.use(VueNVD3);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Line chartHTMLData';
    const wrapper = shallowMount(LineChart, {
      propsData: {msg}
    });
    expect(wrapper.text()).to.include(msg)
  })
});
