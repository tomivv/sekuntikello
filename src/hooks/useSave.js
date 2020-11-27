import {useState} from 'react';

export default function useSave() {
    const [saves, setSaves] = useState([]);

    async function changeSaves(save) {
        setSaves([...saves, save]);
    }

    return {saves, changeSaves}
}