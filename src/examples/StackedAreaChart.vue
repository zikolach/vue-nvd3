<template>
  <div>
    <h2>Stacked area chart</h2>
    <div class="uk-margin-bottom">
      <vn-stacked-area :model="traffics"
                       :x-format="formatDate"
                       y-format=",f">
      </vn-stacked-area>
    </div>


    <div class="uk-width-medium-1-1">
      <ul class="uk-tab" data-uk-tab="{connect:'#tab-content'}">
        <li class="uk-active" aria-expanded="true"><a href="#">HTML</a></li>
        <li aria-expanded="false" class=""><a href="#">Data</a></li>
      </ul>
      <ul id="tab-content" class="uk-switcher uk-margin">
        <li class="uk-active">
          <pre><code>&lt;vn-stacked-area :model="traffics"
  :x-format="formatDate"
  y-format=",f"&gt;
&lt;/vn-stacked-area&gt;</code></pre>
        </li>
        <li>
          <pre><code>{{trafficData}}</code></pre>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  import Faker from 'Faker'
  import _ from 'lodash'
  import d3 from 'd3'

  export default {
    data() {
      const gen_item = (month, day) => {
        return {
          date: new Date(`2016-${month}-${day}`).getTime(),
          visits: Faker.random.number(10000),
          views: Faker.random.number(20000),
          losses: Faker.random.number(3000),
          stay: Faker.random.number(50)
        }
      };

      const days = _.range(31);
      const month = Faker.random.number(12);

      let trafficData = _.map(days, d => gen_item(month, d + 1));
      return {trafficData};
    },
    computed: {
      traffics() {
        return [
          {
            key: 'visits',
            area: true,
            values: _.map(this.trafficData, (t) => {
              return {
                x: t.date,
                y: t.visits
              }
            })
          },
          {
            key: 'views',
            area: true,
            values: _.map(this.trafficData, (t) => {
              return {
                x: t.date,
                y: t.views
              }
            })
          },
          {
            key: 'losses',
            area: true,
            values: _.map(this.trafficData, (t) => {
              return {
                x: t.date,
                y: t.losses
              }
            })
          }
        ]
      }
    },
    methods: {
      formatDate(d) {
        return d3.time.format('%x')(new Date(d))
      }
    }
  }
</script>
