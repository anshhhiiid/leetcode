Array.prototype.last = function (){
    return this.length === 0 ? -1 : this [this.length -1];
};
let nums1=[null , {}, 3];
console.log(nums1.last());

let nums2 =[1,2,3,4];
console.log(nums2.last());

let nums3 =[];
console.log(nums3.last());