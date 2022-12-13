export function HelloWorld(){
    return(
        <h3>Hello World</h3>
    )
}

// export function Concern(props){
//     return(
//         <h3>{props.text}</h3>
//         )
// }

export function Concern({text}){
    return(
        <h3>{text}</h3>
        )
}

export function ByeWorld(){
    return(
        <h3>Bye World</h3>
    )
}
