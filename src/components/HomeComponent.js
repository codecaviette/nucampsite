import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';           // baseUrl is our server constant that allows us to pull data (campsites, comments, promotions) from our server rather than other files.


// This builds structure of each featured item card; called in Home functional component below
function RenderCard({item, isLoading, errMess}) {           // Deconstruct a property named "item" from the props object - to do this, item must be in {}
    if (isLoading) {
        return (
             <Loading />
        );
    }
    if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    console.log(item);

    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}


function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">                {/* When no number succeeds col, all divs in the row will take up same amount of space */}
                    <RenderCard
                        item={props.campsite}               // Create item prop from passed prop, which is used in RenderCard fxn
                        isLoading={props.campsitesLoading}
                        errMess={props.campsitesErrMess}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard
                        item={props.promotion}
                        isLoading={props.promotionLoading}
                        errMess={props.promotionErrMess}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.partner} 
                    isLoading={props.partnerLoading}
                    errMess={props.partnerErrMess}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;