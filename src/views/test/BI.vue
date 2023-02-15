<template>
    <span>
        <AppBarPage />

        <div>
            <apexchart 
                type="area" 
                :options="chartOptions" 
                :series="series"
            ></apexchart>
        </div>

    </span>
</template>
  
<script>
    import AppBarPage from '@/components/AppBar.vue'

export default {
    components:{
        AppBarPage
    },
    data: () => ({ 
        series: [
            {
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, 
            // {
            //     name: 'series2',
            //     data: [11, 32, 45, 32, 34, 52, 41]
            // }
        ],
        chartOptions: {
            theme: { 
                palette: 'palette4'
            },
            grid: {
                show: false, // 网格
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 20
                }, 
            },
            chart: {
                height: 'auto',
                type: 'area',
                zoom: {
                    enabled: false,  // 缩放
                },
                toolbar: { 
                    show: false // 下载工具
                },
                sparkline: {
                    enabled: false,  // 迷你图
                }
            },
            dataLabels: {
                enabled: false // 显示  label
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                //   type: 'datetime',
                // lines: {
                //     show: false,
                // },
                categories: ["aaa", "bbb", "ccc", "dd","eee","fff","kkk"]
            },
            // toolbar: { 
            //     enabled: !false 
            // },
            tooltip:{
                enabled: !true,   // 提示工具
            },
        },
    }),
}
</script>
  

  