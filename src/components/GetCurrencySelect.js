import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const READ_INFOS = gql`{
    getAllCurrencyInfo {
      id
      name
     }
  }`;

const GetCurrencySelect = ({ onFromSelected, onToSelected }) => {

    const { data, loading, error } = useQuery(READ_INFOS);
    if (loading) return <p>loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    const listFrom = data.getAllCurrencyInfo.map((ci) =>
        <option value={ci.id}>{ci.name}</option>
    );
    const listTo = data.getAllCurrencyInfo.map((ci) =>
        <option value={ci.id}>{ci.name}</option>
    );

    return (
        <div>
            <select onChange={onFromSelected}>
                <option selected disabled hidden value={null}>From</option>
                {listFrom}
            </select>
            <select onChange={onToSelected}>
                <option selected disabled hidden value={null}>To</option>
                {listTo}
            </select>

        </div>
    );
}

export default GetCurrencySelect;