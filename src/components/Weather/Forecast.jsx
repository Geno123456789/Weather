
const Forecast = (props) => {
    // console.log(props)

    const now = new Date().getTime();
    const first = Date.parse(props.forecast[2].dt_txt);
    const second = props.forecast[0].dt;
    let date = new Date(second).toLocaleString("en", { weekday: "long" }); // sunday
    //   let ms = Date.parse(second);

    const nextDay = Date.parse(second);




    const dt1 = props.forecast[10].dt
    const dt2 = props.forecast[20].dt
    // let da = new Date()
    // da.setTime(dt1)
    // let dt1_da = da.getDay();

    // console.log(dt1)
    // console.log(dt2)


    const arr = props.forecast.slice(0, 5);

    const days = arr.map(elem => elem.dt);
    const conditions = arr.map(elem => elem.weather[0].main);
    const temps = arr.map(elem => Math.round(elem.main.temp) + '°C');
    // console.log(days)
    
    const allData = [];

    allData.push(days[0], conditions[0], temps[0],
        days[1], conditions[1], temps[1],
        days[2], conditions[2], temps[2],
        days[3], conditions[3], temps[3],
        days[4], conditions[4], temps[4],
    )

    console.log(allData)
    return (
        <div>
            <div>
                {allData.map(elem => <div>{elem}</div>)}
            </div>
        </div>
    )
}

export default Forecast;