import './ItemsList.css'
import ErrorBoundary from '../ErrorComponent/ErrorComponent.js';
import Loader from "../Loader/Loader.js";


 const ItemsList = (props) => {

        const {onIdRequest, displayData, loaded} = props;
        return (
            <ErrorBoundary>
                  {loaded ? <div className="items-list-wrapper w-50">
                      {displayData.map(item =>
                          <span
                             className="list-group-item list-group-item-action"
                             onClick={() => onIdRequest(item.id)}
                             key = {item.id}>{item.name}</span>
                      )}</div> :

                      <Loader />}
            </ErrorBoundary>
        );

}

export default ItemsList






