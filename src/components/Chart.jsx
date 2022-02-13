import React, {} from 'react';
import { Line } from "react-chartjs-2/dist/index"
import { useSelector} from "react-redux";
import * as moment from "moment/moment";
//label = горизонталь
//
const Chart = () => {

    const items = useSelector((state)=> state.items);
//попробовать делать формат даты ТОЛЬКО НА ВЫХОДЕ moment format(не получилось, повтори)
    //убрать конст
        items.sort((item, item2) => {
        const a = new Date(item.date).getTime();
        const b = new Date(item2.date).getTime();
        return a < b ? -1 : a > b ? 1 : 0;
    });
//сортировать по дате, закинуть в лейбл

    const options= {
        title:{
            display: false,
        },
        legend: {
            display: false,
        },
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 4,
            },
        },
    }

    const distanceData = items.map((x) => {return x.distance} ) ;
    const labels =  items.map( (x)=> {return moment(x.date).format("LL")} ) ;
    console.log(distanceData);

    const data = {
        labels,
        datasets: [
            {
                data: distanceData,
                backgroundColor: "rgba(255,99,132,1)",
                borderColor: "rgba(255,99,132,0.5)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                borderWidth: 2,
                label: `Было пройдено`
            },
        ],
    };

    return(
        <div style={{marginTop: '20px'}}>
            <Line data ={data} options = {options}/>
        </div>
    )

}
export default Chart;