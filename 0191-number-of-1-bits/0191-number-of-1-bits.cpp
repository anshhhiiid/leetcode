class Solution {
public:
    int hammingWeight(int n) {
        int cnt =0;
        string s;
        while(n){
            if(n&1){
                s+='1';
                n/=2;
                cnt++;
            }
            else{
                s+='0';
                n/=2;
            }
        }
        return cnt;
    }
};