import Header from './components/Header';
import PaymentForm from './components/PaymentForm';
import CardDetails from './components/CardDetails';
import { Images } from './images';
import { cardPropsUtil } from './utils/cardPropsUtil';
import './sass/app.scss';

function App() {
  return (
    <div className="app-cover-flex">
      <div className="app-cover-item">
        <div className="app-header-flex">
          <div className="app-header-item">
            <Header />
          </div>
        </div>
        <div className="app-body-cover-flex">
          <div className="app-body-cover-item">
            <PaymentForm images={Images} />
          </div>
          <div className="app-body-cover-item">
            <div className="spacer-div"></div>
            <CardDetails images={Images} cardPropsUtil={cardPropsUtil} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
