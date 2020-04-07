import React from 'react'
import Image from "./Image";
import {ALTS, IMAGES} from "../../utils/contants";

const Loader = () => (
    <div className="loader">
        <Image src={IMAGES.loader} alt={ALTS.LOADING_ALT}/>
    </div>
)

export default Loader