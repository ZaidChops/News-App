// api=960754FB-369D-4358-B8FB-ABE3E4716CFA

const option={
    method: "GET",
    "headers": {'X-CoinAPI-Key': '960754FB-369D-4358-B8FB-ABE3E4716CFA'}
}

const cryfetch=async()=>{
    const data=await fetch("GET /v1/exchangerate/{asset_id_base}/{asset_id_quote}?time={time}",option);
    const crypto=await data.json();
    
    console.log(crypto)
}

// cryfetch();

export default cryfetch;