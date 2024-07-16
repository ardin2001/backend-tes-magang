export default function Capitalize(str: string) {
    // return str
    //     .toLowerCase()
    //     .split(" ")
    //     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    //     .join(" ");

    // if(str == null){
    //     str = "dashboard"
    // }
    
    const arr = str.split(" ")
    const result = arr.map(e => e[0].toUpperCase()+e.slice(1))
    return result.join(" ")
}