import React from 'react'
import "./bankcard.css";

export default function Bankcard(props){
        
        return (
            <div>
                <div class="card" id="card_style">
                    <div class="card-body text-center" >
                        <img  id="img_style" src={props.img} alt=""></img>
                        <h5 class="card-title">{props.bankname}</h5> 
                    </div>
                </div>
            </div>
        )
        }

