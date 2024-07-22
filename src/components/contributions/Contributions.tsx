import React from 'react';
// import ApexCharts from 'react-apexcharts';
// import { ApexOptions } from 'apexcharts';

interface ContributionsProps {
  totalContributions: string;
}

const Contributions: React.FC<ContributionsProps> = ({
  totalContributions,
}) => {
  // const daysOfWeek = ['Mon', 'Wed', 'Fri'];
  // const monthsOfYear = [
  //   'Jan',
  //   'Feb',
  //   'Mar',
  //   'Apr',
  //   'May',
  //   'Jun',
  //   'Jul',
  //   'Aug',
  //   'Sep',
  //   'Oct',
  //   'Nov',
  //   'Dec',
  // ];

  // const generateHeatmapData = () => {
  //   return daysOfWeek.map(day => ({
  //     x: day,
  //     y: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
  //   }));
  // };

  // const options: ApexOptions = {
  //   chart: {
  //     type: 'heatmap',
  //   },
  //   series: monthsOfYear.map((month, index) => ({
  //     name: month,
  //     data: generateHeatmapData().map(dayData => ({
  //       x: dayData.x,
  //       y: dayData.y[index],
  //     })),
  //   })),
  //   xaxis: {
  //     categories: daysOfWeek,
  //     title: {
  //       text: 'Days of the Week',
  //     },
  //   },
  //   yaxis: {
  //     title: {
  //       text: 'Months of the Year',
  //     },
  //     labels: {
  //       formatter: (value, index) => monthsOfYear[index],
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   colors: ['#cccc'],
  // };

  return (
    <div className="w-full h-[450px] text-white">
      <h3 className="ml-2 text-base font-semibold">
        {totalContributions} contributions in the last year
      </h3>
      <div className="p-2">
        <div className="w-full h-[360px] border border-gray-700 rounded-lg">
          {/* <ApexCharts
            options={options}
            series={options.series}
            type="heatmap"
            height={350}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Contributions;
