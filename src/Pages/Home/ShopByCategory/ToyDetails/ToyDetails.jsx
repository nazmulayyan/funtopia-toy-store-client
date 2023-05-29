import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toyDetails = useLoaderData();
    console.log(toyDetails);

    return (
        <div>
            <h3>toy details {toyDetails.name}</h3>
            
        </div>
    );
};

export default ToyDetails;