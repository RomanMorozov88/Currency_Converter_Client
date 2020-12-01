import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/client';
import gql from "graphql-tag";

const GET_CONVERSION = gql` 
mutation ($fromId: String!, $toId: String!, $amount: Float!){
    getCurrencyConversion(fromId: $fromId, toId: $toId, amount: $amount) {
        result
    }
  }`;

const Conversion = ({ fromId, toId, amount }) => {

    const [
        getResult,
        { data, loading, error }
    ] = useMutation(GET_CONVERSION);

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
                    || fromId === toId
                ) {
                    return (
                        alert('Insert all data correctly.')
                    );
                }
                getResult({ variables: { fromId, toId, amount } })
            }
            }>Go convert!</button>
            {data && <p>{data.getCurrencyConversion.result}</p>}
        </div>
    );
}

export default Conversion;