import cloudy_day from '../../assets/img/cloudy_day.png';
import thunder from '../../assets/img/thunder.png';
import drizzle from '../../assets/img/drizzle.png';
import rainy from '../../assets/img/rainy.png';
import snow from '../../assets/img/snowy.png';
import sunny from '../../assets/img/sunny.png';
import noData from '../../assets/img/no-data-icon.jpg'

const ForecastItem = (props) => {

    function timestampToDate(ts) {
        let d = new Date();
        d.setTime(ts);
        return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
    }
    let img;
    switch (props.condition) {
        case "Clouds":
            img = cloudy_day
            break;

        case "Thunderstorm":
            img = thunder;
            break;

        case "Drizzle":
            img = drizzle;
            break;

        case "Rain":
            img = rainy;
            break;

        case "Snow":
            img = snow;
            break;

        case "Clear":
            img = sunny;
            break;

        default:
            img = noData;
            break;
    }

    return (
        <div>
            <div>
                {timestampToDate(props.day * 1000)}
                <div>
                    <img src={img} alt="" />
                    {props.condition}
                </div>
                {Math.round(props.temp) + '°C'}
            </div>
        </div>
    )
}

export default ForecastItem;