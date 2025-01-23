import { AfterViewInit, Component, ElementRef, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { createChart } from 'lightweight-charts';

import { dayData } from './data/day';
import { monthData } from './data/month';
import { weekData } from './data/week';
import { yearData } from './data/year';
import { generateData } from './data/generateCandleData';

@Component({
  selector: 'app-charts-view',
  standalone: true,
  imports: [],
  templateUrl: './charts-view.component.html',
  styleUrl: './charts-view.component.scss'
})
export class ChartsViewComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('myChart1') myChart1!: ElementRef<HTMLCanvasElement>;
  @ViewChild('myChart2') myChart2!: ElementRef<HTMLCanvasElement>;
  @ViewChild('myChart3') myChart3!: ElementRef<HTMLCanvasElement>;
  @ViewChild('myChart4') myChart4!: ElementRef<HTMLCanvasElement>;
  @ViewChild('myChart5') myChart5!: ElementRef<HTMLCanvasElement>;
  @ViewChild('myChart6') myChart6!: ElementRef<HTMLCanvasElement>;
  chart: any;
  constructor() {

  }

  ngOnInit() {
    // this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.renderChart();

  }

  ngAfterViewInit(): void {
    this.renderChart1();
    this.renderChart2();
    this.renderChart3();
    this.renderChart4();
  }

  renderChart1(): void {

    /************************************************************************************************
     * Chart 1
     ************************************************************************************************/
    const container = this.myChart1.nativeElement;
    const chart = createChart(container, {
      width: 200,
      height: 300,
      timeScale: {
        timeVisible: true,
        secondsVisible: false
      }
    });
    const lineSeries: any = chart.addLineSeries();
    lineSeries.setData([
      { value: 1, time: 1642425322 },
      { value: 8, time: 1642511722 },
      { value: 10, time: 1642598122 },
      { value: 20, time: 1642684522 },
      { value: 3, time: 1642770922 },
      { value: 43, time: 1642857322 },
      { value: 41, time: 1642943722 },
      { value: 43, time: 1643030122 },
      { value: 56, time: 1643116522 },
      { value: 46, time: 1643202922 },
    ]);


  }


  renderChart2(): void {

    const chartOptions: any = {
      width: 400, height: 300,
      layout: {
        textColor: 'black',
        background: { type: 'solid', color: 'white' }
      }
    };

    /************************************************************************************************
     * Chart 2
     ************************************************************************************************/
    const chart = createChart(this.myChart2.nativeElement, chartOptions);
    const baselineSeries = chart.addBaselineSeries({
      baseValue: { type: 'price', price: 25 },
      topLineColor: 'rgba( 38, 166, 154, 1)',
      topFillColor1: 'rgba( 38, 166, 154, 0.28)',
      topFillColor2: 'rgba( 38, 166, 154, 0.05)',
      bottomLineColor: 'rgba( 239, 83, 80, 1)',
      bottomFillColor1: 'rgba( 239, 83, 80, 0.05)',
      bottomFillColor2: 'rgba( 239, 83, 80, 0.28)'
    });

    const data: any = [
      { value: 1, time: 1642425322 },
      { value: 8, time: 1642511722 },
      { value: 10, time: 1642598122 },
      { value: 20, time: 1642684522 },
      { value: 3, time: 1642770922 },
      { value: 43, time: 1642857322 },
      { value: 41, time: 1642943722 },
      { value: 43, time: 1643030122 },
      { value: 56, time: 1643116522 },
      { value: 46, time: 1643202922 }];

    baselineSeries.setData(data);

    chart.timeScale().fitContent();


    // const toolTipWidth = 80;
    // const toolTipHeight = 80;
    // const toolTipMargin = 15;

    // Create and style the tooltip html element
    // const toolTip: any = document.createElement('div');
    // toolTip.style = `width: 96px; height: 80px; position: absolute; display: none; padding: 8px; box-sizing: border-box; font-size: 12px; text-align: left; z-index: 1000; top: 12px; left: 12px; pointer-events: none; border: 1px solid; border-radius: 2px;font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`;
    // toolTip.style.background = 'white';
    // toolTip.style.color = 'black';
    // toolTip.style.borderColor = '#2962FF';
    // this.myChart2.nativeElement.appendChild(toolTip);
    //   chart.subscribeCrosshairMove((param: any) => {
    //     if (
    //       param.point === undefined ||
    //       !param.time ||
    //       param.point.x < 0 ||
    //       param.point.y < 0
    //     ) {
    //       toolTip.style.display = 'none';
    //     } else {
    //       console.log(param);
    //       // const dateStr = new Date(param.time).toISOString();
    //       toolTip.style.display = 'block';
    //       const data = param.seriesData.get(baselineSeries);
    //       const price = data.value !== undefined ? data.value : data.close;
    //       toolTip.innerHTML = `<div>${price.toFixed(2)}</div>`;

    //       // Position tooltip according to mouse cursor position
    //       toolTip.style.left = param.point.x + 'px';
    //       toolTip.style.top = param.point.y + 'px';

    //       const coordinate = baselineSeries.priceToCoordinate(price);
    //       let shiftedCoordinate = param.point.x - 50;
    //       if (coordinate === null) {
    //           return;
    //       }
    //       shiftedCoordinate = Math.max(
    //           0,
    //           Math.min(this.myChart2.nativeElement.clientWidth - toolTipWidth, shiftedCoordinate)
    //       );
    //       const coordinateY =
    //           coordinate - toolTipHeight - toolTipMargin > 0
    //               ? coordinate - toolTipHeight - toolTipMargin
    //               : Math.max(
    //                   0,
    //                   Math.min(
    //                     this.myChart2.nativeElement.clientHeight - toolTipHeight - toolTipMargin,
    //                       coordinate + toolTipMargin
    //                   )
    //               );
    //       toolTip.style.left = shiftedCoordinate + 'px';
    //       toolTip.style.top = coordinateY + 'px';
    //     }
    //   });



  }
  renderChart3(): void {

    // Lightweight Charts™ Example: Range switcher
    // https://tradingview.github.io/lightweight-charts/tutorials/demos/range-switcher


    const seriesesData = new Map([
      ['1D', dayData],
      ['1W', weekData],
      ['1M', monthData],
      ['1Y', yearData],
    ]);

    const chartOptions: any = {
      width: 600, height: 400,
      layout: {
        textColor: 'black',
        background: { type: 'solid', color: 'white' },
      },
      // height: 200,
    };
    /** @type {import('lightweight-charts').IChartApi} */
    const chart = createChart(this.myChart3.nativeElement, chartOptions);

    // Only needed within demo page
    // eslint-disable-next-line no-undef
    window.addEventListener('resize', () => {
      chart.applyOptions({ height: 400 });
    });

    const intervalColors: any = {
      '1D': '#2962FF',
      '1W': 'rgb(225, 87, 90)',
      '1M': 'rgb(242, 142, 44)',
      '1Y': 'rgb(164, 89, 209)',
    };

    const lineSeries: any = chart.addLineSeries({ color: intervalColors['1D'] });

    function setChartInterval(interval: any) {
      lineSeries.setData(seriesesData.get(interval));
      lineSeries.applyOptions({
        color: intervalColors[interval],
      });
      chart.timeScale().fitContent();
    }

    setChartInterval('1D');

    const styles = `
      .buttons-container {
          display: flex;
          flex-direction: row;
          gap: 8px;
      }
      .buttons-container button {
          all: initial;
          font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu,
              sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 510;
          line-height: 24px; /* 150% */
          letter-spacing: -0.32px;
          padding: 8px 24px;
          color: rgba(19, 23, 34, 1);
          background-color: rgba(240, 243, 250, 1);
          border-radius: 8px;
          cursor: pointer;
      }

      .buttons-container button:hover {
          background-color: rgba(224, 227, 235, 1);
      }

      .buttons-container button:active {
          background-color: rgba(209, 212, 220, 1);
      }
    `;

    const stylesElement = document.createElement('style');
    stylesElement.innerHTML = styles;
    this.myChart3.nativeElement.appendChild(stylesElement);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    const intervals = ['1D', '1W', '1M', '1Y'];
    intervals.forEach(interval => {
      const button = document.createElement('button');
      button.innerText = interval;
      button.addEventListener('click', () => setChartInterval(interval));
      buttonsContainer.appendChild(button);
    });

    this.myChart3.nativeElement.appendChild(buttonsContainer);

  }

  renderChart4(): void {

    // Lightweight Charts™ Example: Realtime updates
    // https://tradingview.github.io/lightweight-charts/tutorials/demos/realtime-updates

    const chartOptions: any = {
      layout: {
        textColor: 'black',
        background: { type: 'solid', color: 'white' },
      },
      width: 600,
      height: 300,
    };
    const container = this.myChart4.nativeElement;
    /** @type {import('lightweight-charts').IChartApi} */
    const chart: any = createChart(container, chartOptions);

    // Only needed within demo page
    // eslint-disable-next-line no-undef
    window.addEventListener('resize', () => {
      chart.applyOptions({ height: 200 });
    });

    const series = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });

    const data = generateData(2500, 20, 1000);

    series.setData(data.initialData);
    chart.timeScale().fitContent();
    chart.timeScale().scrollToPosition(5);

    // simulate real-time data
    function* getNextRealtimeUpdate(realtimeData: any) {
      for (const dataPoint of realtimeData) {
        yield dataPoint;
      }
      return null;
    }
    const streamingDataProvider = getNextRealtimeUpdate(data.realtimeUpdates);

    const intervalID = setInterval(() => {
      const update = streamingDataProvider.next();
      if (update.done) {
        clearInterval(intervalID);
        return;
      }
      series.update(update.value);
    }, 100);

    const styles = `
    .buttons-container {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }
    .buttons-container button {
        all: initial;
        font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu,
            sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 510;
        line-height: 24px; /* 150% */
        letter-spacing: -0.32px;
        padding: 8px 24px;
        color: rgba(19, 23, 34, 1);
        background-color: rgba(240, 243, 250, 1);
        border-radius: 8px;
        cursor: pointer;
    }

    .buttons-container button:hover {
        background-color: rgba(224, 227, 235, 1);
    }

    .buttons-container button:active {
        background-color: rgba(209, 212, 220, 1);
    }
`;

    const stylesElement = document.createElement('style');
    stylesElement.innerHTML = styles;
    container.appendChild(stylesElement);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    const button = document.createElement('button');
    button.innerText = 'Go to realtime';
    button.addEventListener('click', () => chart.timeScale().scrollToRealTime());
    buttonsContainer.appendChild(button);

    container.appendChild(buttonsContainer);
  }
}
