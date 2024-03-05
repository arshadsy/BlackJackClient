import { CardUI } from "./CardUI"

export const DealerSide = ({dealerCards}) => {
    // const dealerDeckShow = <div className="flex-row ">
    //     {
    //         dealerCards.slice(0, -1).map(c =>
    //             <div className="flex-column"> {c} </div>
    //             )
    //     }
    //     <div className="flex-column"> *-* </div>
    // </div>
    return (<CardUI cards={[...dealerCards.slice(0,-1),'*-*']}/>)
}