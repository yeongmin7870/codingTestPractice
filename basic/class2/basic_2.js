
        function solution(a, b, c) {
            let answer = "YES", max;
            let r1, r2;
            if (a < b) {
                max = b;
                r1 = a;
                r2 = c;
            }
            else {
                max = a;
                r1 = b;
                r2 = c;
            }
            if (c > max) {
                max = c;
                r1 = a;
                r2 = b;
            }
            if (max >= r1 + r2) {
                answer = "No";
            }
            return answer;
        }
        console.log(solution(13, 33, 17));
