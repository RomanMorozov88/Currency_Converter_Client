import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_OPERATIONS = gql` 
query ($page: Int, $size: Int){
    getOperations(page: $page, size: $size) {
        pair {
            fromCurrency {
                name
            }
            toCurrency {
                name
            }
        }
        amount
	    date
    }
  }`;

const Conversion = ({ size }) => {

    const [page, setPage] = React.useState(0);

    const [
        getResult,
        { data, loading, error }
    ] = useLazyQuery(GET_OPERATIONS);

    if (loading) return <p>loading...</p>;
    if (error) return <p>ERROR</p>;

    return (
        <div>
            <button onClick={
                () => {
                    setPage(page + 1);
                    getResult({ variables: { page, size } });
                }
            }>
                {page == 0 ? "Get operations!" : "Next"}
            </button>
            <button onClick={
                () => {
                    // setState is Async so let's try this trick for correct page-number
                    setPage(1);
                    getResult({ variables: { page: 0, size } });
                }
            }>Go to the zero!</button>
            {data &&
                data.getOperations &&
                data.getOperations.map((op, i) =>
                    <div key={i}>
                        <p>{op.pair.fromCurrency.name} - {op.pair.toCurrency.name}</p>
                        <p>{op.amount}</p>
                        <p>{op.date}</p>
                        <p> * * *</p>
                    </div>)}
        </div>
    );
}

export default Conversion;