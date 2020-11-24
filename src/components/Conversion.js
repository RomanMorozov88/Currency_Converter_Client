import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_CONVERSION = gql` 
query ($fromId: String!, $toId: String!, $amount: Float!){
    getCurrencyConversion(fromId: $fromId, toId: $toId, amount: $amount)
  }`;

const Conversion = ({ fromId, toId, amount }) => {

    const [
        getResult,
        { data, loading, error }
    ] = useLazyQuery(GET_CONVERSION);

    if (loading) return <p>loading...</p>;
    if (error) return <p>ERROR</p>;

    return (
        <div>
            <button onClick={() => {
                if (
                    fromId == null
                    || toId == null
                    || amount == null
                    || amount <= 0
                ) {
                    return (
                        alert('Insert all data correctly.')
                    );
                }
                getResult({ variables: { fromId, toId, amount } })
            }
            }>Go convert!</button>
            {data && <p>{data.getCurrencyConversion}</p>}
        </div>
    );
}

export default Conversion;