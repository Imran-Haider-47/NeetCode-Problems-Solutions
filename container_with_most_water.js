const container_with_most_water=(height)=>{
    // Brute Force
    let res=0;
    let area=0;
    for(let l=0;l< height.length-1;l++)
    {
        for(let r =l+1; r< height.length;r++)
        {
            area= (r-l) * Math.min(height[l],height[r]);
            res = Math.max(res,area);
        }
    }
    return res;

}

const height = [1,8,6,2,5,4,8,3,7];
console.log(container_with_most_water(height));