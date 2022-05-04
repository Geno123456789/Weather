import loader from '../../assets/loader.gif';
import style from './Preloader.module.css'

const Preloader = ()=> {
    return <div className={style.loader}>
    <img src={loader} alt='preloader' />
    </div>
}

export default Preloader;