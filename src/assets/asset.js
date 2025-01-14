import logo from './logo.svg'
import bg from './bg.svg'
import header from './header.png'
import whyUs1 from './whyUs1.png'
import whyUs2 from './whyUs2.png'
import whyUs3 from './whyUs3.png'
import share from './share.png'
import contact from './contact.png'


const asset = {
    logo,
    bg,
    header,
    whyUs1,
    whyUs2,
    whyUs3,
    share,
    contact
}
export default asset;


// Why Choose Data
export const whyChooseData = [
    {
        image:whyUs1,
        title:"Unlock Your Potential",
        description: "Access top interview questions tailored to your needs."
    },
    {
        image:whyUs2,
        title:"Practice Smarter",
        description: "Interactive tools to improve quickly and efficiently."
    },
    {
        image:whyUs3,
        title:"Conquer Every Interview",
        description: "Boost confidence and land your dream job."
    },
]

// Topics Data
export const TopicsData = [
    {
        id: 1,
        name: "Math",
        Difficulty: "Easy",
        key: "math"
    },
    {
        id: 2,
        name: "Pattern",
        Difficulty: "Easy",
        key: "pattern"
    },
    {
        id: 3,
        name: "Array",
        Difficulty: "Easy",
        key: "array"
    },
    {
        id: 4,
        name: "String",
        Difficulty: "Easy",
        key: "string"
    },
    {
        id: 5,
        name: "Sorting",
        Difficulty: "Easy",
        key: "sorting" 
    },
    {
        id: 6,
        name: "Searching",
        Difficulty: "Easy",
        key: "searching"
    },
    {
        id: 7,
        name: "Matrix",
        Difficulty: "Easy",
        key: "matrix"
    },
    {
        id: 9,
        name: "Hashing",
        Difficulty: "Easy",
        key: "hashing"
    },
    {
        id: 10,
        name: "Two Pointer",
        Difficulty: "Easy",
        key: "twoPointers"
    },
    {
        id: 11,
        name: "Prefix Sum",
        Difficulty: "Medium",
        key: "prefixSum"
    },
    {
        id: 12,
        name: "Linked List",
        Difficulty: "Medium",
        key: "linkedList"
    },
    {
        id: 13,
        name: "Backtracking",
        Difficulty: "Medium",
        key: "backtracking"
    },
    {
        id: 14,
        name: "Trees",
        Difficulty: "Medium",
        key: "trees"
    },
    {
        id: 15,
        name: "Heap",
        Difficulty: "Medium",
        key: "heap"
    },
    {
        id: 16,
        name: "Stack",
        Difficulty: "Medium",
        key: "stack"
    },
    {
        id: 17,
        name: "Queue",
        Difficulty: "Medium",
        key: "queue"
    },
    {
        id: 18,
        name: "Sliding Window",
        Difficulty: "Medium",
        key: "slidingWindow"
    },
    {
        id: 19,
        name: "Bit Manipulation",
        Difficulty: "Medium",
        key: "bitManipulation"
    },
    {
        id: 20,
        name: "Dynamic Programming",
        Difficulty: "Hard",
        key: "dynamicProgramming"
    },
    {
        id: 21,
        name: "Greedy",
        Difficulty: "Hard",
        key: "greedy"
    },
    {
        id: 22,
        name: "Graphs",
        Difficulty: "Hard",
        key: "graphs"
    },
    {
        id: 23,
        name: "Tries",
        Difficulty: "Hard",
        key: "tries"
    },
]


// All Topics Details Question
export const MathData = [
    {
        id: 1,
        name: "Palindrome Number",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/palindrome-number/",
        solution: {
            description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool isPalindrome(int x) {
                                if (x < 0) return false;

                                long reverse = 0;
                                int xCopy = x;

                                while (x > 0) {
                                    reverse = (reverse * 10) + (x % 10);
                                    x /= 10;
                                }

                                return reverse == xCopy;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                        def isPalindrome(self, x: int) -> bool:
                            if x < 0: return False

                            reverse = 0
                            xCopy = x

                            while x > 0:
                                reverse = (reverse * 10) + (x % 10)
                                x //= 10
        
                            return reverse == xCopy
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean isPalindrome(int x) {
                                if (x < 0) return false;

                                int reverse = 0;
                                int xCopy = x;

                                while (x > 0) {
                                    reverse = (reverse * 10) + (x % 10);
                                    x /= 10;
                                }

                                return reverse == xCopy;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 2,
        name: "Roman to Integer",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/roman-to-integer/",
        solution: {
            description: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II. Given a roman numeral, convert it to an integer.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int romanToInt(string s) {
                                int res = 0;
                                unordered_map<char, int> roman = {
                                    {'I', 1},
                                    {'V', 5},
                                    {'X', 10}, 
                                    {'L', 50},
                                    {'C', 100},
                                    {'D', 500},
                                    {'M', 1000}
                                };

                                for (int i = 0; i < s.size() - 1; i++) {
                                    if (roman[s[i]] < roman[s[i + 1]]) {
                                        res -= roman[s[i]];
                                    } else {
                                        res += roman[s[i]];
                                    }
                                }

                                return res + roman[s[s.size() - 1]];        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                        def romanToInt(self, s: str) -> int:
                            res = 0
                            roman = {
                                'I': 1,
                                'V': 5,
                                'X': 10,
                                'L': 50,
                                'C': 100,
                                'D': 500,
                                'M': 1000
                            }

                            for a, b in zip(s, s[1:]):
                                if roman[a] < roman[b]:
                                    res -= roman[a]
                                else:
                                    res += roman[a]

                            return res + roman[s[-1]] 
                    `
                ,
                java:
                    `
                        class Solution {
                            public int romanToInt(String s) {
                                int res = 0;
                                Map<Character, Integer> roman = new HashMap<>();
                                roman.put('I', 1);
                                roman.put('V', 5);
                                roman.put('X', 10);
                                roman.put('L', 50);
                                roman.put('C', 100);
                                roman.put('D', 500);
                                roman.put('M', 1000);

                                for (int i = 0; i < s.length() - 1; i++) {
                                    if (roman.get(s.charAt(i)) < roman.get(s.charAt(i + 1))) {
                                        res -= roman.get(s.charAt(i));
                                    } else {
                                        res += roman.get(s.charAt(i));
                                    }
                                }

                                return res + roman.get(s.charAt(s.length() - 1));        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 3,
        name: "Plus One",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/plus-one/",
        solution: {
            description: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.Increment the large integer by one and return the resulting array of digits.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            vector<int> plusOne(vector<int>& digits) {
                                for (int i = digits.size() - 1; i >= 0; i--) {
                                    if (digits[i] + 1 != 10) {
                                        digits[i] += 1;
                                        return digits;
                                    }
                                    digits[i] = 0;
                                    if (i == 0) {
                                        digits.insert(digits.begin(), 1);
                                        return digits;
                                    }
                                }
                                return digits;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def plusOne(self, digits: List[int]) -> List[int]:

                                for i in range(len(digits) - 1, -1, -1):

                                    if digits[i] + 1 != 10:
                                        digits[i] += 1
                                        return digits
                                    
                                    digits[i] = 0

                                    if i == 0:
                                        return [1] + digits
                    `
                ,
                java:
                   `
                        class Solution {
                            public int[] plusOne(int[] digits) {
                                for (int i = digits.length - 1; i >= 0; i--) {
                                    if (digits[i] + 1 != 10) {
                                        digits[i] += 1;
                                        return digits;
                                    }
                                    digits[i] = 0;
                                }
                                
                                int[] newDigits = new int[digits.length + 1];
                                newDigits[0] = 1;
                                return newDigits;        
                            }
                        }
                   `
            },
        }
    },
    {
        id: 4,
        name: "Add Binary",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/add-binary/",
        solution: {
            description: "Given two binary strings a and b, return their sum as a binary string.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            string addBinary(string a, string b) {
                                string res;
                                int carry = 0;
                                int i = a.length() - 1;
                                int j = b.length() - 1;

                                while (i >= 0 || j >= 0 || carry) {
                                    if (i >= 0) carry += a[i--] - '0';
                                    if (j >= 0) carry += b[j--] - '0';

                                    res += carry % 2 + '0';
                                    carry /= 2;
                                }

                                reverse(begin(res), end(res));
                                return res;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def addBinary(self, a: str, b: str) -> str:
                                carry = 0
                                res = []
                                
                                idxA, idxB = len(a) - 1, len(b) - 1
                                
                                while idxA >= 0 or idxB >= 0 or carry == 1:
                                    if idxA >= 0:
                                        carry += int(a[idxA])
                                        idxA -= 1            
                                    if idxB >= 0:
                                        carry += int(b[idxB])
                                        idxB -= 1            

                                    res.append(str(carry % 2))
                                    carry = carry // 2
                                    
                                return "".join(res[::-1])
                    `
                ,
                java:
                   `
                        class Solution {
                            public String addBinary(String a, String b) {
                                char[] charArrA = a.toCharArray();
                                char[] charArrB = b.toCharArray();
                                StringBuilder sb = new StringBuilder();

                                int i = charArrA.length - 1, j = charArrB.length - 1;
                                int carry = 0;
                                while (i >= 0 || j >= 0 || carry > 0) {
                                    int aNum = i >= 0 ? charArrA[i] - '0' : 0;
                                    int bNum = j >= 0 ? charArrB[j] - '0' : 0;

                                    int sum = aNum + bNum + carry;
                                    int digit = sum % 2;
                                    carry = sum / 2;
                                    i--;
                                    j--;

                                    sb.append((char)(digit + '0'));
                                }

                                return sb.reverse().toString();
                            }
                        }
                   `
            },
        }
    },
    {
        id: 5,
        name: "sqrt(x)",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/sqrtx/",
        solution: {
            description: "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int mySqrt(int x) {
                                if (x == 0) return 0;
                                int left = 1, right = x;
                                while (left <= right) {
                                    int mid = left + (right - left) / 2;
                                    if (mid == x / mid) {
                                        return mid;
                                    } else if (mid < x / mid) {
                                        left = mid + 1;
                                    } else {
                                        right = mid - 1;
                                    }
                                }
                                return right;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def mySqrt(self, x: int) -> int:
                                if x == 0:
                                    return 0
                                left, right = 1, x
                                while left <= right:
                                    mid = (left + right) // 2
                                    if mid * mid == x:
                                        return mid
                                    elif mid * mid < x:
                                        left = mid + 1
                                    else:
                                        right = mid - 1
                                return right
                    `
                ,
                java:
                   `
                        class Solution {
                            public int mySqrt(int x) {
                                if (x == 0) return 0;
                                int left = 1, right = x;
                                while (left <= right) {
                                    int mid = left + (right - left) / 2;
                                    if (mid == x / mid) {
                                        return mid;
                                    } else if (mid < x / mid) {
                                        left = mid + 1;
                                    } else {
                                        right = mid - 1;
                                    }
                                }
                                return right;
                            }
                        }
                   `
            },
        }
    },
    {
        id: 6,
        name: "Climbing Stairs",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/climbing-stairs/",
        solution: {
            description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int climbStairs(int n) {
                                if (n <= 3) return n;

                                int prev1 = 3;
                                int prev2 = 2;
                                int cur = 0;

                                for (int i = 3; i < n; i++) {
                                    cur = prev1 + prev2;
                                    prev2 = prev1;
                                    prev1 = cur;
                                }

                                return cur;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def climbStairs(self, n: int) -> int:
                                if n <= 3: return n

                                prev1 = 3
                                prev2 = 2
                                cur = 0

                                for _ in range(3, n):
                                    cur = prev1 + prev2
                                    prev2 = prev1
                                    prev1 = cur
                                
                                return cur
                    `
                ,
                java:
                   `
                        class Solution {
                            public int climbStairs(int n) {
                                if (n <= 3) return n;

                                int prev1 = 3;
                                int prev2 = 2;
                                int cur = 0;

                                for (int i = 3; i < n; i++) {
                                    cur = prev1 + prev2;
                                    prev2 = prev1;
                                    prev1 = cur;
                                }

                                return cur;        
                            }
                        }
                   `
            },
        }
    },
    {
        id: 7,
        name: "Add Two Numbers",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/add-two-numbers/",
        solution: {
            description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
                                ListNode* dummy = new ListNode();
                                ListNode* res = dummy;
                                int total = 0, carry = 0;

                                while (l1 || l2 || carry) {
                                    total = carry;

                                    if (l1) {
                                        total += l1->val;
                                        l1 = l1->next;
                                    }
                                    if (l2) {
                                        total += l2->val;
                                        l2 = l2->next;
                                    }

                                    int num = total % 10;
                                    carry = total / 10;
                                    dummy->next = new ListNode(num);
                                    dummy = dummy->next;
                                }

                                ListNode* result = res->next;
                                delete res;
                                return result;         
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
                                
                                dummy = ListNode()
                                res = dummy

                                total = carry = 0

                                while l1 or l2 or carry:
                                    total = carry

                                    if l1:
                                        total += l1.val
                                        l1 = l1.next
                                    if l2:
                                        total += l2.val
                                        l2 = l2.next
                                    
                                    num = total % 10
                                    carry = total // 10
                                    dummy.next = ListNode(num)
                                    dummy = dummy.next
                                
                                return res.next
                    `
                ,
                java:
                   `
                        class Solution {
                            public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
                                ListNode dummy = new ListNode();
                                ListNode res = dummy;
                                int total = 0, carry = 0;

                                while (l1 != null || l2 != null || carry != 0) {
                                    total = carry;

                                    if (l1 != null) {
                                        total += l1.val;
                                        l1 = l1.next;
                                    }
                                    if (l2 != null) {
                                        total += l2.val;
                                        l2 = l2.next;
                                    }

                                    int num = total % 10;
                                    carry = total / 10;
                                    dummy.next = new ListNode(num);
                                    dummy = dummy.next;
                                }

                                return res.next;        
                            }
                        }
                   `
            },
        }
    },
    {
        id: 8,
        name: "Reverse Integers",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/reverse-integer/",
        solution: {
            description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int reverse(int x) {
                                int ans = 0;
                                while (x != 0) {
                                    int digit = x % 10;
                                    
                                    if ((ans > INT_MAX / 10) || (ans < INT_MIN / 10)) {
                                        return 0;
                                    }
                                    
                                    ans = ans * 10 + digit;
                                    x = x / 10;
                                }
                                return ans;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def reverse(self, x: int) -> int:
                                res = 0
                                if x < 0:
                                    res = int(str(x)[1:][::-1]) * -1
                                else:
                                    res = int(str(x)[::-1])
                                
                                if res > 2 ** 31 - 1 or res < -2 ** 31:
                                    return 0
                                
                                return res
                    `
                ,
                java:
                   `
                        class Solution {
                            public int reverse(int x) {
                                int res = 0;
                                boolean isNegative = x < 0;
                                String strX = String.valueOf(Math.abs(x));
                                StringBuilder sb = new StringBuilder(strX).reverse();
                                
                                try {
                                    res = Integer.parseInt(sb.toString());
                                } catch (NumberFormatException e) {
                                    return 0;
                                }
                                
                                return isNegative ? -res : res;       
                            }
                        }
                   `
            },
        }
    },
    {
        id: 9,
        name: "Perfect Squares",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/perfect-squares/",
        solution: {
            description: "Given an integer n, return the least number of perfect square numbers that sum to n.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            std::vector<int> memo;

                            int numSquares(int n) {
                                memo.resize(n + 1, -1);
                                return solve(n);
                            }

                            int solve(int n) {
                                if (n == 0) return 0;
                                if (n < 0) return INT_MAX;
                                if (memo[n] != -1) return memo[n];
                                int ans = INT_MAX;
                                for (int i = 1; i * i <= n; ++i) {
                                    ans = std::min(ans, 1 + solve(n - i * i));
                                }
                                return memo[n] = ans;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def numSquares(self, n: int) -> int:
                                memo = [-1] * (n + 1)
                                
                                def solve(n):
                                    if n == 0:
                                        return 0
                                    if n < 0:
                                        return float('inf')
                                    if memo[n] != -1:
                                        return memo[n]
                                    ans = float('inf')
                                    i = 1
                                    while i * i <= n:
                                        ans = min(ans, 1 + solve(n - i * i))
                                        i += 1
                                    memo[n] = ans
                                    return ans
                                
                                return solve(n)
                    `
                ,
                java:
                   `
                        class Solution {

                            int[] memo;

                            public int numSquares(int n) {
                                memo = new int[n+1];
                                Arrays.fill(memo, -1);
                                return solve(n);
                            }

                            public int solve(int n) {
                                if(n == 0) return 0;
                                if(n < 0) return Integer.MAX_VALUE;
                                if(memo[n] != -1) return memo[n];
                                int ans = Integer.MAX_VALUE;
                                for(int i=1;i*i<=n;i++) {
                                    ans = Math.min(
                                        ans,
                                        1 + solve(n-(i*i))
                                    );
                                }
                                return memo[n] = ans;
                            }
                        }
                   `
            },
        }
    },
    {
        id: 10,
        name: "Integer to Roman",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/integer-to-roman/",
        solution: {
            description: "Given an integer, convert it to a Roman numeral.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            string intToRoman(int num) {
                                const vector<pair<int, string>> valueSymbols{
                                    {1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"}, {100, "C"},
                                    {90, "XC"},  {50, "L"},   {40, "XL"}, {10, "X"},   {9, "IX"},
                                    {5, "V"},    {4, "IV"},   {1, "I"}};

                                string res;

                                for (const auto& [value, symbol] : valueSymbols) {
                                    if (num == 0)
                                        break;

                                    while (num >= value) {
                                        res += symbol;
                                        num -= value;
                                    }
                                }

                                return res;        
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def intToRoman(self, num: int) -> str:
                                value_symbols = [
                                    (1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'),
                                    (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'),
                                    (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')
                                ]
                                
                                res = []

                                for value, symbol in value_symbols:
                                    if num == 0:
                                        break
                                    count = num // value
                                    res.append(symbol * count)
                                    num -= count * value

                                return ''.join(res)                
                   `
                ,
                java:
                   `
                        class Solution {
                            public String intToRoman(int num) {
                                final int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
                                final String[] symbols = {"M", "CM", "D",  "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};

                                StringBuilder sb = new StringBuilder();

                                for (int i = 0; i < values.length; ++i) {
                                    if (num == 0)
                                        break;
                                    while (num >= values[i]) {
                                        sb.append(symbols[i]);
                                        num -= values[i];
                                    }
                                }

                                return sb.toString();        
                            }
                        }
                   `
            },
        }
    },
    {
        id: 11,
        name: "Pow(x,n)",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/powx-n/",
        solution: {
            description: "Implement pow(x, n), which calculates x raised to the power n.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            double myPow(double x, int n) {
                                return binaryExp(x, static_cast<long>(n));
                            }

                        private:
                            double binaryExp(double x, long n) {
                                if (n == 0) {
                                    return 1;
                                }
                            
                                if (n < 0) {
                                    return 1.0 / binaryExp(x, -n);
                                }
                            
                                if (n % 2 == 1) {
                                    return x * binaryExp(x * x, (n - 1) / 2);
                                } else {
                                    return binaryExp(x * x, n / 2);
                                }
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def myPow(self, x: float, n: int) -> float:

                                def calc_power(x, n):
                                    if x == 0:
                                        return 0
                                    if n == 0:
                                        return 1
                                    
                                    res = calc_power(x, n // 2)
                                    res = res * res

                                    if n % 2 == 1:
                                        return res * x
                                    
                                    return res

                                ans = calc_power(x, abs(n))

                                if n >= 0:
                                    return ans
                                
                                return 1 / ans 
                   `
                ,
                java:
                   `
                        class Solution {
                            public double myPow(double x, int n) {
                                return binaryExp(x, (long) n);
                            }

                            private double binaryExp(double x, long n) {
                                if (n == 0) {
                                    return 1;
                                }
                            
                                if (n < 0) {
                                    return 1.0 / binaryExp(x, -n);
                                }
                            
                                if (n % 2 == 1) {
                                    return x * binaryExp(x * x, (n - 1) / 2);
                                } else {
                                    return binaryExp(x * x, n / 2);
                                }
                            }
                        }
                   `
            },
        }
    },
    {
        id: 12,
        name: "Unique Paths",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/unique-paths/",
        solution: {
            description: "Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int uniquePaths(int m, int n) {
                                std::vector<int> aboveRow(n, 1);

                                for (int row = 1; row < m; row++) {
                                    std::vector<int> currentRow(n, 1);
                                    for (int col = 1; col < n; col++) {
                                        currentRow[col] = currentRow[col - 1] + aboveRow[col];
                                    }
                                    aboveRow = currentRow;
                                }

                                return aboveRow[n - 1];        
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def uniquePaths(self, m: int, n: int) -> int:
                                
                                aboveRow = [1] * n

                                for _ in range(m - 1):
                                    currentRow = [1] * n
                                    for i in range(1, n):
                                        currentRow[i] = currentRow[i-1] + aboveRow[i]
                                    aboveRow = currentRow
                                
                                return aboveRow[-1]
                   `
                ,
                java:
                   `
                        class Solution {
                            public int uniquePaths(int m, int n) {
                                int[] aboveRow = new int[n];
                                Arrays.fill(aboveRow, 1);

                                for (int row = 1; row < m; row++) {
                                    int[] currentRow = new int[n];
                                    Arrays.fill(currentRow, 1);
                                    for (int col = 1; col < n; col++) {
                                        currentRow[col] = currentRow[col - 1] + aboveRow[col];
                                    }
                                    aboveRow = currentRow;
                                }

                                return aboveRow[n - 1];        
                            }
                        }
                   `
            },
        }
    },
    {
        id: 13,
        name: "Basic Calculator",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/basic-calculator/",
        solution: {
            description: "Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int calculate(string s) {
                                int number = 0;
                                int signValue = 1;
                                int result = 0;
                                stack<int> operationsStack;

                                for (int i = 0; i < s.length(); i++) {
                                    char c = s[i];

                                    if (isdigit(c)) {
                                        number = number * 10 + (c - '0');
                                    } else if (c == '+' || c == '-') {
                                        result += number * signValue;
                                        signValue = (c == '-') ? -1 : 1;
                                        number = 0;
                                    } else if (c == '(') {
                                        operationsStack.push(result);
                                        operationsStack.push(signValue);
                                        result = 0;
                                        signValue = 1;
                                    } else if (c == ')') {
                                        result += signValue * number;
                                        result *= operationsStack.top();
                                        operationsStack.pop();
                                        result += operationsStack.top();
                                        operationsStack.pop();
                                        number = 0;
                                    }
                                }

                                return result + number * signValue;
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def calculate(self, s: str) -> int:
                                number = 0
                                sign_value = 1
                                result = 0
                                operations_stack = []

                                for c in s:
                                    if c.isdigit():
                                        number = number * 10 + int(c)
                                    elif c in "+-":
                                        result += number * sign_value
                                        sign_value = -1 if c == '-' else 1
                                        number = 0
                                    elif c == '(':
                                        operations_stack.append(result)
                                        operations_stack.append(sign_value)
                                        result = 0
                                        sign_value = 1
                                    elif c == ')':
                                        result += sign_value * number
                                        result *= operations_stack.pop()
                                        result += operations_stack.pop()
                                        number = 0

                                return result + number * sign_value
                   `
                ,
                java:
                   `
                        class Solution {
                            public int calculate(String s) {
                                int number = 0;
                                int signValue = 1;
                                int result = 0;
                                Stack<Integer> operationsStack = new Stack<>();

                                for (int i = 0; i < s.length(); i++) {
                                    char c = s.charAt(i);

                                    if (Character.isDigit(c)) {
                                        number = number * 10 + (c - '0');
                                    } else if (c == '+' || c == '-') {
                                        result += number * signValue;
                                        signValue = (c == '-') ? -1 : 1;
                                        number = 0;
                                    } else if (c == '(') {
                                        operationsStack.push(result);
                                        operationsStack.push(signValue);
                                        result = 0;
                                        signValue = 1;
                                    } else if (c == ')') {
                                        result += signValue * number;
                                        result *= operationsStack.pop();
                                        result += operationsStack.pop();
                                        number = 0;
                                    }
                                }

                                return result + number * signValue;
                            }
                        }
                   `
            },
        }
    },
    {
        id: 14,
        name: "Max Points on a Line",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/max-points-on-a-line/",
        solution: {
            description: "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int maxPoints(vector<vector<int>>& points) {
                                int i = 0, j, n, count = 0, x1, x2, y1, y2;
                                n = points.size();

                                if (n == 1) {
                                    return 1;
                                }

                                for (i = 0; i < n; i++) {
                                    unordered_map<float, int> hash;
                                    x1 = points[i][0];
                                    y1 = points[i][1];

                                    for (j = n - 1; j > i; j--) {
                                        x2 = points[j][0];
                                        y2 = points[j][1];

                                        if (x2 - x1 == 0) {
                                            hash[FLT_MAX]++;
                                        } else if (y2 - y1 == 0) {
                                            hash[0]++;
                                        } else {
                                            float slope = (float)(y2 - y1) / (x2 - x1);
                                            hash[slope]++;
                                        }
                                    }

                                    // Find the maximum count for this base point
                                    for (auto& entry : hash) {
                                        count = max(count, entry.second);
                                    }
                                }

                                return count + 1; // Include the base point itself
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def maxPoints(self, points: List[List[int]]) -> int:
                                max_p = 0
                                for i  in range(len(points)):
                                    temp = dict()
                                    point = points[i]
                                    for j in range(i+1, len(points)):
                                        point2 = points[j]
                                        x1 = point[0]
                                        y1 = point[1]

                                        x2 = point2[0]
                                        y2 = point2[1]
                                        if x2 - x1 == 0:
                                            slope = "undef"

                                        else:
                                            slope = (y2-y1)/(x2-x1)
                                        temp[slope] = temp.get(slope,0)+1
                                        max_p = max(max_p, temp[slope])
                                return max_p + 1
                   `
                ,
                java:
                   `
                        public class Solution{
                            public int maxPoints(Point[] points) {
                                if (points==null) return 0;
                                if (points.length<=2) return points.length;
                                
                                Map<Integer,Map<Integer,Integer>> map = new HashMap<Integer,Map<Integer,Integer>>();
                                int result=0;
                                for (int i=0;i<points.length;i++){ 
                                    map.clear();
                                    int overlap=0,max=0;
                                    for (int j=i+1;j<points.length;j++){
                                        int x=points[j].x-points[i].x;
                                        int y=points[j].y-points[i].y;
                                        if (x==0&&y==0){
                                            overlap++;
                                            continue;
                                        }
                                        int gcd=generateGCD(x,y);
                                        if (gcd!=0){
                                            x/=gcd;
                                            y/=gcd;
                                        }
                                        
                                        if (map.containsKey(x)){
                                            if (map.get(x).containsKey(y)){
                                                map.get(x).put(y, map.get(x).get(y)+1);
                                            }else{
                                                map.get(x).put(y, 1);
                                            }   					
                                        }else{
                                            Map<Integer,Integer> m = new HashMap<Integer,Integer>();
                                            m.put(y, 1);
                                            map.put(x, m);
                                        }
                                        max=Math.max(max, map.get(x).get(y));
                                    }
                                    result=Math.max(result, max+overlap+1);
                                }
                                return result;
                                
                                
                            }
                            private int generateGCD(int a,int b){
                        
                                if (b==0) return a;
                                else return generateGCD(b,a%b);
                                
                            }
                        }
                   `
            },
        }
    },
]

export const PatternData = [
    {
        id: 1,
        name: "Pattern 1",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/square-pattern/0"
    },
    {
        id: 2,
        name: "Pattern 2",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/right-triangle/0"
    },
    {
        id: 3,
        name: "Pattern 3",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-number/1"
    },
    {
        id: 4,
        name: "Pattern 4",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-number-1661428795/1"
    },
    {
        id: 5,
        name: "Pattern 5",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-pattern/0"
    },
    {
        id: 6,
        name: "Pattern 6",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-number-1661489840/0"
    },
    {
        id: 7,
        name: "Pattern 7",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-pattern-1661492263/0"
    },
    {
        id: 8,
        name: "Pattern 8",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-pattern-1661493231/0"
    },
    {
        id: 9,
        name: "Pattern 9",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/pattern/0"
    },
    {
        id: 10,
        name: "Pattern 10",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-pattern-1661718013/0"
    },
    {
        id: 11,
        name: "Pattern 11",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-pattern-1661718455/0"
    },
]

export const ArrayData = [
    {
        id: 1,
        name: "Two Sum",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/two-sum/"
    },
    {
        id: 2,
        name: "Remove Duplicates from Sorted Array",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
    },
    {
        id: 3,
        name: "Search Insert Position",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/search-insert-position/"
    },
    {
        id: 4,
        name: "Merge Sorted Array",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/merge-sorted-array/"
    },
    {
        id: 5,
        name: "Pascal's Triangle",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/pascals-triangle/"
    },
    {
        id: 6,
        name: "Best Time to Buy and Sell Stock",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
    },
    {
        id: 7,
        name: "Container With Most Water",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/container-with-most-water/"
    },
    {
        id: 8,
        name: "Next Permutation",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/next-permutation/"
    },
    {
        id: 9,
        name: "Search in Rotated Sorted Array",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
    },
    {
        id: 10,
        name: "Valid Sudoku",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/valid-sudoku/"
    },
    {
        id: 11,
        name: "Rotate Image",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/rotate-image/"
    },
    {
        id: 12,
        name: "Spiral Matrix",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/spiral-matrix/"
    },
    {
        id: 13,
        name: "Sort Colors",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/sort-colors/"
    },
    {
        id: 14,
        name: "First Missing Positive",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/first-missing-positive/"
    },
    {
        id: 15,
        name: "Text Justification",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/text-justification/"
    },
    {
        id: 16,
        name: "Trapping Rain Water",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/trapping-rain-water/"
    },
]

export const StringData = [
    {
        id: 1,
        name: "Valid Anargam",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/valid-anagram/"
    },
    {
        id: 2,
        name: "Increasing Decreasing String",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/increasing-decreasing-string/"
    },
    {
        id: 3,
        name: "Valid Palindrome",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/valid-palindrome/"
    },
    {
        id: 4,
        name: "Longest Common Prefix",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/longest-common-prefix/"
    },
    {
        id: 5,
        name: "Length of Last Word",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/length-of-last-word/"
    },
    {
        id: 6,
        name: "Simplify Path",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/simplify-path/"
    },
    {
        id: 7,
        name: "Word Search",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/word-search/"
    },
    {
        id: 8,
        name: "Longest Substring Without Repeating Characters",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    {
        id: 9,
        name: "Zigzag Conversion",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/zigzag-conversion/"
    },
    {
        id: 10,
        name: "Generate Parentheses",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/generate-parentheses/"
    },
    {
        id: 11,
        name: "Palindrome Partitioning",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/palindrome-partitioning/"
    },
    {
        id: 12,
        name: "Word Break",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/word-break/"
    },
    {
        id: 13,
        name: "Regular Expression Matching",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/regular-expression-matching/"
    },
    {
        id: 14,
        name: "Longest Valid Parentheses",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/longest-valid-parentheses/description/"
    },
    {
        id: 15,
        name: "Scramble String",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/scramble-string/"
    },
]

export const SortingData = [
    {
        id: 1,
        name: "Majority Element",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/majority-element/"
    },
    {
        id: 2,
        name: "Contains Duplicate",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/contains-duplicate/"
    },
    {
        id: 3,
        name: "Missing Number",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/missing-number/"
    },
    {
        id: 4,
        name: "Third Maximum Number",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/third-maximum-number/"
    },
    {
        id: 5,
        name: "Merge Intervals",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/merge-intervals/"
    },
    {
        id: 6,
        name: "Sort List",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/sort-list/description/"
    },
    {
        id: 7,
        name: "Minimum Number of Arrows to Burst Balloons",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"
    },
    {
        id: 8,
        name: "Kth Largest Element in an Array",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/kth-largest-element-in-an-array/description/"
    },
    {
        id: 9,
        name: "H-Index",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/h-index/"
    },
    {
        id: 10,
        name: "Find Median from Data Stream",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/find-median-from-data-stream/"
    },
    {
        id: 11,
        name: "Russian Doll Envelopes",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/russian-doll-envelopes/description/"
    },
    {
        id: 12,
        name: "Minimum Cost to Hire K Workers",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/"
    },
]

export const SearchingData = [
    {
        id: 1,
        name: "Guess Number Higher or Lower",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/guess-number-higher-or-lower/"
    },
    {
        id: 2,
        name: "Binary Search",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/binary-search/"
    },
    {
        id: 3,
        name: "First Bad Version",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/first-bad-version/"
    },
    {
        id: 4,
        name: "Find First and Last Position of Element in Sorted Array",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
    },
    {
        id: 5,
        name: "Find Minimum in Rotated Sorted Array",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
    },
    {
        id: 6,
        name: "Find Peak Element",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/find-peak-element/"
    },
    {
        id: 7,
        name: "Search a 2D Matrix II",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/search-a-2d-matrix-ii/"
    },
    {
        id: 8,
        name: "Koko Eating Bananas",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/koko-eating-bananas/"
    },
    {
        id: 9,
        name: "Max Consecutive Ones III",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/max-consecutive-ones-iii/"
    },
    {
        id: 10,
        name: "Search Suggestions System",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/search-suggestions-system/"
    },
    {
        id: 11,
        name: "Minimum Limit of Balls in a Bag",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/"
    },
    {
        id: 12,
        name: "Shortest Subarray with Sum at Least K",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/"
    },
    {
        id: 13,
        name: "Nth Magical Number",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/nth-magical-number/"
    },
]

export const MatrixData = [
    {
        id: 1,
        name: "Transpose Matrix",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/transpose-matrix/"
    },
    {
        id: 2,
        name: "Rotate by 90 Degree",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/rotate-by-90-degree-1587115621/1"
    },
    {
        id: 3,
        name: "Search in a Row-Column sorted matrix",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/search-in-a-matrix17201720/1"
    },
    {
        id: 4,
        name: "Valid Sudoku",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/valid-sudoku/"
    },
    {
        id: 5,
        name: "Word Search",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/word-search/"
    },
    {
        id: 6,
        name: "Number of Islands",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/number-of-islands/"
    },
    {
        id: 7,
        name: "Valid Sudoku",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/valid-sudoku/"
    },
    {
        id: 8,
        name: "Maximal Square",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/maximal-square/"
    },
    {
        id: 9,
        name: "Game of Life",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/game-of-life/"
    },
    {
        id: 9,
        name: "Set Matrix Zeroes",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/set-matrix-zeroes/"
    },
    {
        id: 11,
        name: "Sliding Puzzle",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/sliding-puzzle/"
    },
    {
        id: 12,
        name: "Maximal Rectangle",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/maximal-rectangle/"
    },
]

export const HashingData = [
    {
        id: 1,
        name: "Linked List Cycle",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/linked-list-cycle/"
    },
    {
        id: 2,
        name: "Intersection of Two Linked Lists",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/intersection-of-two-linked-lists/"
    },
    {
        id: 3,
        name: "Happy Number",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/happy-number/"
    },
    {
        id: 4,
        name: "Word Pattern",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/word-pattern/"
    },
    {
        id: 5,
        name: "Isomorphic Strings",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/isomorphic-strings/"
    },
    {
        id: 6,
        name: "Top K Frequent Elements",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/top-k-frequent-elements/"
    },
    {
        id: 7,
        name: "Find All Anagrams in a String",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/"
    },
    {
        id: 8,
        name: "Linked List Cycle II",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/linked-list-cycle-ii/"
    },
    {
        id: 9,
        name: "Word Ladder",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/word-ladder/"
    },
    {
        id: 10,
        name: "Sudoku Solver",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/sudoku-solver/"
    },
]

export const TwoPointerData = [
    {
        id: 1,
        name: "Remove Duplicates from Sorted Array",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
    },
    {
        id: 2,
        name: "Find the Index of the First Occurrence in a String",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"
    },
    {
        id: 3,
        name: "Palindrome Linked List",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/palindrome-linked-list/"
    },
    {
        id: 4,
        name: "Move Zeroes",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/move-zeroes/"
    },
    {
        id: 5,
        name: "Reverse String",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/reverse-string/"
    },
    {
        id: 6,
        name: "String Compression",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/string-compression/"
    },
    {
        id: 7,
        name: "Permutation in String",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/permutation-in-string/"
    },
    {
        id: 8,
        name: "Next Greater Element III",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/next-greater-element-iii/"
    },
    {
        id: 9,
        name: "String Compression",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/string-compression/"
    },
    {
        id: 10,
        name: "Shortest Subarray to be Removed to Make Array Sorted",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/"
    },
    {
        id: 11,
        name: "Sentence Similarity III",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/sentence-similarity-iii/"
    },
    {
        id: 12,
        name: "Find Median from Data Stream",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/find-median-from-data-stream/"
    },
]

export const PrefixSumData = [
    {
        id: 1,
        name: "Find Pivot Index",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/find-pivot-index/"
    },
    {
        id: 2,
        name: "Running Sum of 1d Array",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/running-sum-of-1d-array/"
    },
    {
        id: 3,
        name: "Find the Highest Altitude",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/find-the-highest-altitude/"
    },
    {
        id: 4,
        name: "Maximum Subarray Min-Product",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/maximum-subarray-min-product/"
    },
    {
        id: 5,
        name: "Product of Array Except Self",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/product-of-array-except-self/"
    },
    {
        id: 6,
        name: "Subarray Sum Equals K",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/subarray-sum-equals-k/"
    },
    {
        id: 7,
        name: "Make Sum Divisible by P",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/make-sum-divisible-by-p/"
    },
    {
        id: 8,
        name: "Number of Sub-matrices That Sum to Target",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/"
    },
    {
        id: 9,
        name: "Minimum Adjacent Swaps for K Consecutive Ones",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/"
    },
]

export const LinkedListData = [
    {
        id: 1,
        name: "Remove Duplicates from Sorted List",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/"
    },
    {
        id: 2,
        name: "Intersection of Two Linked Lists",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/intersection-of-two-linked-lists/"
    },
    {
        id: 3,
        name: "Reverse Linked List",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/reverse-linked-list/"
    },
    {
        id: 4,
        name: "Palindrome Linked List",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/palindrome-linked-list/"
    },
    {
        id: 5,
        name: "Swap Nodes in Pairs",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/swap-nodes-in-pairs/"
    },
    {
        id: 6,
        name: "Remove Duplicates from Sorted List II",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/"
    },
    {
        id: 7,
        name: "Flatten Binary Tree to Linked List",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"
    },
    {
        id: 8,
        name: "Copy List with Random Pointer",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/copy-list-with-random-pointer/"
    },
    {
        id: 9,
        name: "LRU Cache",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/lru-cache/"
    },
    {
        id: 10,
        name: "Delete Node in a Linked List",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/delete-node-in-a-linked-list/"
    },
    {
        id: 11,
        name: "Delete the Middle Node of a Linked List",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/"
    },
    {
        id: 12,
        name: "Maximum Twin Sum of a Linked List",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/"
    },
    {
        id: 13,
        name: "Remove Nodes From Linked List",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/remove-nodes-from-linked-list/"
    },
    {
        id: 14,
        name: "Merge k Sorted Lists",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/merge-k-sorted-lists/"
    },
    {
        id: 15,
        name: "Reverse Nodes in k-Group",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/reverse-nodes-in-k-group/"
    },
]

export const BacktrackingData = [
    {
        id: 1,
        name: "Combination Sum",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/combination-sum/"
    },
    {
        id: 2,
        name: "Permutations",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/permutations/"
    },
    {
        id: 3,
        name: "Combinations",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/combinations/"
    },
    {
        id: 4,
        name: "Subsets",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/subsets/"
    },
    {
        id: 5,
        name: "Word Search",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/word-search/"
    },
    {
        id: 6,
        name: "N-Queens",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/n-queens/"
    },
    {
        id: 7,
        name: "Remove Invalid Parentheses",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/remove-invalid-parentheses/"
    },
]

export const TreesData = [
    {
        id: 1,
        name: "Binary Tree Inorder Traversal",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/binary-tree-inorder-traversal/"
    },
    {
        id: 2,
        name: "Same Tree",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/same-tree/"
    },
    {
        id: 3,
        name: "Symmetric Tree",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/symmetric-tree/"
    },
    {
        id: 4,
        name: "Maximum Depth of Binary Tree",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
    },
    {
        id: 5,
        name: "Convert Sorted Array to Binary Search Tree",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"
    },
    {
        id: 6,
        name: "Path Sum",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/path-sum/"
    },
    {
        id: 7,
        name: "Count Complete Tree Nodes",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/count-complete-tree-nodes/"
    },
    {
        id: 8,
        name: "Invert Binary Tree",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/invert-binary-tree/"
    },
    {
        id: 9,
        name: "Diameter of Binary Tree",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/diameter-of-binary-tree/"
    },
    {
        id: 10,
        name: "Search in a Binary Search Tree",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/search-in-a-binary-search-tree/"
    },
    {
        id: 11,
        name: "Binary Tree Pre-order Traversal",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/binary-tree-preorder-traversal/"
    },
    {
        id: 12,
        name: "Binary Tree Post-order Traversal",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/binary-tree-postorder-traversal/"
    },
    {
        id: 13,
        name: "Unique Binary Search Trees",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/binaryhttps://leetcode.com/problems/unique-binary-search-trees/"
    },
    {
        id: 14,
        name: "Validate Binary Search Tree",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/validate-binary-search-tree/"
    },
    {
        id: 15,
        name: "Binary Tree Level Order Traversal",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
    },
    {
        id: 16,
        name: "Binary Tree Zigzag Level Order Traversal",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
    },
    {
        id: 17,
        name: "Construct Binary Tree from Pre-order and Inorder Traversal",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
    },
    {
        id: 18,
        name: "Construct Binary Tree from Inorder and Post-order Traversal",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"
    },
    {
        id: 19,
        name: "Flatten Binary Tree to Linked List",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"
    },
    {
        id: 20,
        name: "Sum Root to Leaf Numbers",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/sum-root-to-leaf-numbers/"
    },
    {
        id: 21,
        name: "Sum Root to Leaf Numbers",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/sum-root-to-leaf-numbers/"
    },
    {
        id: 22,
        name: "Binary Search Tree Iterator",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/binary-search-tree-iterator/"
    },
    {
        id: 23,
        name: "Binary Tree Right Side View",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/binary-tree-right-side-view/"
    },
    {
        id: 24,
        name: "Lowest Common Ancestor of a Binary Tree",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
    },
    {
        id: 25,
        name: "Construct Quad Tree",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/construct-quad-tree/"
    },
    {
        id: 26,
        name: "Delete Node in a BST",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/delete-node-in-a-bst/"
    },
    {
        id: 27,
        name: "Maximum Level Sum of a Binary Tree",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/"
    },
    {
        id: 28,
        name: "Count Good Nodes in Binary Tree",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/"
    },
    {
        id: 29,
        name: "Linked List in Binary Tree",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/linked-list-in-binary-tree/"
    },
    {
        id: 30,
        name: "Binary Tree Maximum Path Sum",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
    },
    {
        id: 31,
        name: "Vertical Order Traversal of a Binary Tree",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/"
    },
]

export const HeapData = [
    {
        id: 1,
        name: "Kth Largest Element in an Array",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/kth-largest-element-in-an-array/"
    },
    {
        id: 2,
        name: "Top K Frequent Elements",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/top-k-frequent-elements/"
    },
    {
        id: 3,
        name: "Find K Pairs with Smallest Sums",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/"
    },
    {
        id: 4,
        name: "Sort an Array",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/sort-an-array/"
    },
    {
        id: 5,
        name: "Sliding Window Maximum",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/sliding-window-maximum/"
    },
    {
        id: 6,
        name: "Strong Password Checker",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/strong-password-checker/"
    },
    {
        id: 7,
        name: "Smallest Range Covering Elements from K Lists",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/"
    },
]

export const StackData = [
    {
        id: 1,
        name: "Next Greater Element I",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/next-greater-element-i/"
    },
    {
        id: 2,
        name: "N-ary Tree Pre-order Traversal",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/n-ary-tree-preorder-traversal/"
    },
    {
        id: 3,
        name: "Remove Outermost Parentheses",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/remove-outermost-parentheses/"
    },
    {
        id: 4,
        name: "Simplify Path",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/simplify-path/"
    },
    {
        id: 5,
        name: "Reorder List",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/reorder-list/"
    },
    {
        id: 6,
        name: "Evaluate Reverse Polish Notation",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
    },
    {
        id: 7,
        name: "Min Stack",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/min-stack/"
    },
    {
        id: 8,
        name: "Remove Duplicate Letters",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/remove-duplicate-letters/"
    },
    {
        id: 9,
        name: "Decode String",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/decode-string/"
    },
    {
        id: 10,
        name: "Asteroid Collision",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/asteroid-collision/"
    },
    {
        id: 11,
        name: "Daily Temperatures",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/daily-temperatures/"
    },
    {
        id: 12,
        name: "Largest Rectangle in Histogram",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/largest-rectangle-in-histogram/"
    },
    {
        id: 13,
        name: "Tag Validator",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/tag-validator/"
    },
]

export const QueueData = [
    {
        id: 1,
        name: "Implement Stack using Queues",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/implement-stack-using-queues/"
    },
    {
        id: 2,
        name: "Number of Recent Calls",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/number-of-recent-calls/"
    },
    {
        id: 3,
        name: "Number of Students Unable to Eat Lunch",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/"
    },
    {
        id: 4,
        name: "Time Needed to Buy Tickets",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/time-needed-to-buy-tickets/"
    },
    {
        id: 5,
        name: "Dota2 Senate",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/dota2-senate/"
    },
    {
        id: 6,
        name: "Reveal Cards In Increasing Order",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/reveal-cards-in-increasing-order/"
    },
    {
        id: 7,
        name: "Max Value of Equation",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/max-value-of-equation/"
    },
    {
        id: 8,
        name: "Maximum Number of Tasks You Can Assign",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/"
    },
]

export const slidingWindowData = [
    {
        id: 1,
        name: "Longest Harmonious Subsequence",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/longest-harmonious-subsequence/"
    },
    {
        id: 2,
        name: "Maximum Average Subarray I",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/maximum-average-subarray-i/"
    },
    {
        id: 3,
        name: "Defuse the Bomb",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/defuse-the-bomb/"
    },
    {
        id: 4,
        name: "Find the K-Beauty of a Number",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/find-the-k-beauty-of-a-number/"
    },
    {
        id: 5,
        name: "Minimum Size Subarray Sum",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/minimum-size-subarray-sum/"
    },
    {
        id: 6,
        name: "Find All Anagrams in a String",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/"
    },
    {
        id: 7,
        name: "Permutation in String",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/permutation-in-string/"
    },
    {
        id: 8,
        name: "Find K Closest Elements",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/find-k-closest-elements/"
    },
    {
        id: 9,
        name: "Subarray Product Less Than K",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/subarray-product-less-than-k/"
    },
    {
        id: 10,
        name: "Count Number of Nice Subarrays",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/count-number-of-nice-subarrays/"
    },
    {
        id: 11,
        name: "Sliding Window Maximum",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/sliding-window-maximum/"
    },
    {
        id: 12,
        name: "Sliding Window Median",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/sliding-window-median/"
    },
]

export const BitManipulationData = [
    {
        id: 1,
        name: "Add Binary",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/add-binary/"
    },
    {
        id: 2,
        name: "Single Number",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/single-number/"
    },
    {
        id: 3,
        name: "Reverse Bits",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/reverse-bits/"
    },
    {
        id: 4,
        name: "Number of 1 Bits",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/number-of-1-bits/"
    },
    {
        id: 5,
        name: "Counting Bits",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/counting-bits/"
    },
    {
        id: 5,
        name: "Counting Bits",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/counting-bits/"
    },
    {
        id: 6,
        name: "Find the Difference",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/find-the-difference/"
    },
    {
        id: 7,
        name: "Binary Watch",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/binary-watch/"
    },
    {
        id: 8,
        name: "Convert a Number to Hexadecimal",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/convert-a-number-to-hexadecimal/"
    },
    {
        id: 9,
        name: "Hamming Distance",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/hamming-distance/"
    },
    {
        id: 10,
        name: "Number Complement",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/number-complement/"
    },
    {
        id: 11,
        name: "Flipping an Image",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/flipping-an-image/"
    },
    {
        id: 12,
        name: "Power of Two",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/power-of-two/"
    },
    {
        id: 13,
        name: "Gray Code",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/gray-code/"
    },
    {
        id: 14,
        name: "Repeated DNA Sequences",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/repeated-dna-sequences/"
    },
    {
        id: 15,
        name: "Bitwise AND of Numbers Range",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/bitwise-and-of-numbers-range/"
    },
    {
        id: 16,
        name: "Maximum Product of Word Lengths",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/maximum-product-of-word-lengths/"
    },
    {
        id: 17,
        name: "Sum of Two Integers",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/sum-of-two-integers/"
    },
    {
        id: 18,
        name: "Integer Replacement",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/integer-replacement/"
    },
    {
        id: 19,
        name: "Total Hamming Distance",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/total-hamming-distance/"
    },
    {
        id: 20,
        name: "Beautiful Arrangement",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/beautiful-arrangement/"
    },
]

export const DynamicProgrammingData = [
    {
        id: 1,
        name: "Is Subsequence",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/is-subsequence/"
    },
    {
        id: 2,
        name: "Fibonacci Number",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/fibonacci-number/"
    },
    {
        id: 3,
        name: "Maximum Repeating Substring",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/maximum-repeating-substring/"
    },
    {
        id: 4,
        name: "Maximum Repeating Substring",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/maximum-repeating-substring/"
    },
    {
        id: 5,
        name: "Longest Palindromic Substring",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/longest-palindromic-substring/"
    },
    {
        id: 6,
        name: "Jump Game",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/jump-game/"
    },
    {
        id: 7,
        name: "Maximum Subarray",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/maximum-subarray/"
    },
    {
        id: 8,
        name: "Decode Ways",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/decode-ways/"
    },
    {
        id: 9,
        name: "Triangle",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/triangle/"
    },
    {
        id: 10,
        name: "Longest Increasing Subsequence",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/longest-increasing-subsequence/"
    },
    {
        id: 11,
        name: "Coin Change",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/coin-change/"
    },
    {
        id: 12,
        name: "Rotate Function",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/rotate-function/"
    },
    {
        id: 13,
        name: "Non-overlapping Intervals",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/non-overlapping-intervals/"
    },
    {
        id: 14,
        name: "Poor Pigs",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/poor-pigs/"
    },
    {
        id: 15,
        name: "Wildcard Matching",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/wildcard-matching/"
    },
    {
        id: 16,
        name: "Scramble String",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/scramble-string/"
    },
    {
        id: 17,
        name: "Burst Balloons",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/burst-balloons/"
    },
    {
        id: 18,
        name: "Frog Jump",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/frog-jump/"
    },
    {
        id: 19,
        name: "Count The Repetitions",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/count-the-repetitions/"
    },
]

export const GreedyData = [
    {
        id: 1,
        name: "Longest Palindrome",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/longest-palindrome/"
    },
    {
        id: 2,
        name: "Assign Cookies",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/assign-cookies/"
    },
    {
        id: 3,
        name: "Can Place Flowers",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/can-place-flowers/"
    },
    {
        id: 4,
        name: "Lemonade Change",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/lemonade-change/"
    },
    {
        id: 5,
        name: "Gas Station",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/gas-station/"
    },
    {
        id: 6,
        name: "Remove K Digits",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/remove-k-digits/description/"
    },
    {
        id: 7,
        name: "Minimum Number of Arrows to Burst Balloons",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"
    },
    {
        id: 8,
        name: "Valid Triangle Number",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/valid-triangle-number/"
    },
    {
        id: 9,
        name: "Maximum Distance in Arrays",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/maximum-distance-in-arrays/"
    },
    {
        id: 10,
        name: "Maximum Swap",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/maximum-swap/"
    },
    {
        id: 11,
        name: "Reorganize String",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/reorganize-string/"
    },
    {
        id: 12,
        name: "Rabbits in Forest",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/rabbits-in-forest/"
    },
    {
        id: 13,
        name: "Most Profit Assigning Work",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/most-profit-assigning-work/"
    },
    {
        id: 14,
        name: "Most Profit Assigning Work",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/candy/"
    },
    {
        id: 15,
        name: "Create Maximum Number",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/create-maximum-number/"
    },
    {
        id: 16,
        name: "Super Washing Machines",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/super-washing-machines/"
    },
]

export const GraphsData = [
    {
        id: 1,
        name: "Find the Town Judge",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/find-the-town-judge/"
    },
    {
        id: 2,
        name: "Find Center of Star Graph",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/find-center-of-star-graph/"
    },
    {
        id: 3,
        name: "Number of Ways to Arrive at Destination",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"
    },
    {
        id: 4,
        name: "Clone Graph",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/clone-graph/"
    },
    {
        id: 5,
        name: "Course Schedule",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/course-schedule/"
    },
    {
        id: 6,
        name: "Evaluate Division",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/evaluate-division/"
    },
    {
        id: 7,
        name: "Number of Provinces",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/number-of-provinces/"
    },
    {
        id: 8,
        name: "Keys and Rooms",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/keys-and-rooms/"
    },
    {
        id: 9,
        name: "Loud and Rich",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/loud-and-rich/"
    },
    {
        id: 10,
        name: "Most Stones Removed with Same Row or Column",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"
    },
    {
        id: 11,
        name: "Flower Planting With No Adjacent",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/flower-planting-with-no-adjacent/"
    },
    {
        id: 12,
        name: "Validate Binary Tree Nodes",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/validate-binary-tree-nodes/"
    },
    {
        id: 13,
        name: "Reorder Routes to Make All Paths Lead to the City Zero",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/"
    },
    {
        id: 14,
        name: "Longest Increasing Path in a Matrix",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/"
    },
    {
        id: 15,
        name: "Redundant Connection II",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/redundant-connection-ii/"
    },
    {
        id: 16,
        name: "Couples Holding Hands",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/couples-holding-hands/"
    },
    {
        id: 17,
        name: "Shortest Path Visiting All Nodes",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/"
    },
]

export const TriesData = [
    {
        id: 1,
        name: "Implement Trie",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/implement-trie-prefix-tree/"
    },
    {
        id: 2,
        name: "Design Add and Search Words Data Structure",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
    },
    {
        id: 3,
        name: "Lexicographical Numbers",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/lexicographical-numbers/"
    },
    {
        id: 4,
        name: "Palindrome Pairs",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/palindrome-pairs/description/"
    },
]


// Challenge
export const ChallengeData = [
    {
        id : 1,
        title : 'Challenge - 1 : Data Structure & Algorithm',
        description : 'Solve the problem within 30 minutes to earn points and rank up.',
        timeLimit : 30,
        Questions : [
            {
                question: 'How can we describe an array in the best possible way?',
                options: [
                    'The Array shows a hierarchical structure.',
                    'Arrays are immutable.',
                    'Container that stores the elements of similar types',
                    'The Array is not a data structure'
                ],
                correct: 3
            },
            {
                question: 'Which data structure uses LIFO principle?',
                options: ['Queue', 'Stack', 'Linked List', 'Array'],
                correct: 2
            },
            {
                question: 'Which one of the following is the process of inserting an element in the stack?',
                options: ['Insert', 'Add', 'Push', 'None of the above'],
                correct: 3
            },
            {
                question: 'Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?',
                options: ['Insertion Sort', 'Quick Sort', 'Heap Sort', 'Merge Sort'],
                correct: 4
            },
            {
                question: 'What is a data structure?',
                options: [' A programming language', 'A collection of algorithms', 'A way to store and organize data', 'A type of computer hardware'],
                correct: 3
            },
            {
                question: 'Which data structure is used for implementing recursion?',
                options: ['Stack', 'Queue', 'List', 'Array'],
                correct: 1
            },
            {
                question: 'What is the value of the postfix expression 6 3 2 4 + - *?',
                options: ['74', '-18', '22', '40'],
                correct: 2
            },
            {
                question: 'The data structure required for Breadth First Traversal on a graph is?',
                options: ['Array', 'Stack', 'Tree', 'Queue'],
                correct: 4
            },
            {
                question: 'Which of the following application makes use of a circular linked list?',
                options: ['Recursive function calls', 'Undo operation in a text editor', 'Implement Hash Tables', 'Allocating CPU to resources'],
                correct: 4
            },
            {
                question: 'Which of the following tree data structures is not a balanced binary tree?',
                options: ['Splay tree', 'B-tree', 'AVL tree', 'Red-black tree'],
                correct: 3
            },
            {
                question: 'Which of the following is not the type of queue?',
                options: ['Priority queue', 'Circular queue', 'Single ended queue', 'Ordinary queue'],
                correct: 4
            },
            {
                question: 'The optimal data structure used to solve Tower of Hanoi is _________',
                options: ['Tree', 'Heap', 'Priority queue', 'Stack'],
                correct: 4
            },
            {
                question: 'Which of the following cases does not exist in complexity theory?',
                options: ['Best case', 'Average case', 'Worst case', 'Empty case'],
                correct: 4
            },
            {
                question: "What's the worst-case scenario in a linear search algorithm?",
                options: ['The element is somewhere in the middle of the array', 'The element is not present in the array', 'The element is the last in the array', 'Either the element is the last in the array or is not there'],
                correct: 4
            },
            {
                question: 'The time complexity of the dequeue operation in a queue is',
                options: ['O(1)', 'O(n)', 'O(logn)', 'O(nlogn)'],
                correct: 1
            },
        ]
    },
    {
        id : 2,
        title : 'Challenge - 2 : Data Structure & Algorithm',
        description : 'Solve the problem within 30 minutes to earn points and rank up.',
        timeLimit : 30,
        Questions : [
            {
                question: 'What would be the time complexity to find an element in the linked list?',
                options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
                correct: 1
            },
            {
                question: 'Which algorithm stops the execution when it finds the solution otherwise start the problem from the top?',
                options: ['Backtracking', 'Divide and conquer', 'Branch and Bound', 'Dynamic programming'],
                correct: 1
            },
            {
                question: 'A graph with all vertices having equal degree is known as a',
                options: ['Multi Graph', 'Regular Graph', 'Simple Graph', 'Complete Graph'],
                correct: 2
            },
            {
                question: 'A graph with all vertices having equal degree is known as a',
                options: ['Multi Graph', 'Regular Graph', 'Simple Graph', 'Complete Graph'],
                correct: 2
            },
            {
                question: 'A full binary tree can be generated using',
                options: ['post-order and pre-order traversal', 'pre-order traversal', 'post-order traversal', 'in-order traversal'],
                correct: 1
            },
            {
                question: 'Which algorithm type is used in solving the 4 Queens problem?',
                options: ['Dynamic programming', 'Branch and Bound', 'Backtracking', 'Greedy'],
                correct: 3
            },
            {
                question: 'Given an undirected graph G with V vertices and E edges, what will be the sum of the degrees of all vertices?',
                options: ['E', '2E', 'V + E', '2V'],
                correct: 2
            },
            {
                question: 'The necessary condition to be checked before deletion from the queue is',
                options: ['Overflow', 'Rear value', 'Front value', 'Underflow'],
                correct: 4
            },
            {
                question: 'BFS is best compared to DFS in the case of',
                options: ["The graph's width is large", "The graph's depth is large", 'The graph consists of many nodes', 'The graph is complex'],
                correct: 2
            },
            {
                question: 'Which array operations have a time complexity of O(1)?',
                options: ['Searching any element', 'Inserting an element', 'Accessing any element', 'deleting an element'],
                correct: 3
            },
            {
                question: ' O(n) means computing time is',
                options: ['Constant', 'Quadratic', 'Linear', 'Cubic'],
                correct: 3
            },
            {
                question: 'A linearly ordered sequence of memory cells is known as',
                options: ['node', 'link', 'variable', 'null'],
                correct: 1
            },
            {
                question: 'Which of the given applications are Topological Sorts of a graph?',
                options: ['OD Deadlock Detection', 'Sentence Ordering', 'Course Scheduling', 'All of the above'],
                correct: 4
            },
            {
                question: 'Which algorithms are used for string and pattern-matching problems?',
                options: ['KMP Algorithm', 'Greedy', 'Dynamic Programming', 'None of the above'],
                correct: 1
            },
            {
                question: 'If the Queue is non-empty, choose the correct application condition from the following.',
                options: ['Rear = front', 'Unpredictable', 'Rear > front', 'Rear < front'],
                correct: 3
            },
        ]
    },
    {
        id : 3,
        title : 'Challenge - 3 : Data Structure & Algorithm',
        description : 'Solve the problem within 30 minutes to earn points and rank up.',
        timeLimit : 30,
        Questions : [
            {
                question: 'What is the time complexity of accessing an element in a HashMap (best and worst case)?',
                options: ['O(1) O(1)', 'O(n) O(n)', 'O(1) O(n)', 'O(n) O(1)'],
                correct: 3
            },
            {
                question: 'Which data structure is used to perform level-order traversal on a binary tree?',
                options: ['Queue', 'Stack', 'Linked List', 'Array'],
                correct: 1
            },
            {
                question: 'What is the minimum number of queues required for implementing a stack?',
                options: ['1', '2', '3', '4'],
                correct: 2
            },
            {
                question: 'Which data structure is used to check a palindrome?',
                options: ['Queue', 'Stack', 'Linked List', 'Array'],
                correct: 2
            },
            {
                question: 'Which among the following data structures is used to implement a priority queue?',
                options: ['Queue', 'Stack', 'Linked List', 'Heap'],
                correct: 4
            },
            {
                question: 'What is the maximum depth of a trie with n strings of length m?',
                options: ['m', 'log2 n', 'log2 m', 'n'],
                correct: 1
            },
            {
                question: 'How many nodes does a full binary tree with n leaves contains?',
                options: ['2*n - 1', '2n ', 'n', '1'],
                correct: 1
            },
            {
                question: 'Which is faster in search operation among the AA trees and Red-black trees?',
                options: ['AA-tree', 'Red black tree', 'Equally faster', 'None of these'],
                correct: 1
            },
            {
                question: 'Consider the following numbers 8,1,2,4,3,9,6,5 to be inserted into the empty binary search tree. What will be the sequence of in-order traversal of the resultant binary search tree?',
                options: ['8 1 3 5 6 9 2 4', '1 2 3 4 5 6 8 9', '5 6 9 3 4 2 1 8', '8 1 2 4 3 9 6 5'],
                correct: 2
            },
            {
                question: "The amount of memory needs to run to completion is known as_____________",
                options: ['Worst case', 'Best case', 'Time complexity', 'Space complexity'],
                correct: 4
            },
            {
                question: 'Data by itself is not useful unless',
                options: ['It is massive', 'It is processed to obtain information', 'It is collected from diverse sources', 'It is properly stated'],
                correct: 2
            },
            {
                question: 'A linear list in which each node has pointers to point to the predecessor and successors nodes is called as _______________',
                options: ['Singly Linked List', 'Circular Linked List', 'Doubly Linked List', 'Linear Linked List'],
                correct: 3
            },
            {
                question: 'Which of the following involves arranging the records in a logical order?',
                options: ['Merging', 'Sorting', 'Traversing', 'Searching'],
                correct: 2
            },
            {
                question: 'Which of the following refers to a single unit of values?',
                options: ['Group item', 'Basic item', 'Data item', 'Elementary item'],
                correct: 3
            },
            {
                question: 'The values in which field uniquely determine the record in a file',
                options: ['Primary key', 'Secondary key', 'Pointer', 'Key'],
                correct: 1
            },
        ]
    }
]

// All Tips & Tricks Data
export const TipsTricksData = [
    {
        condition: "If input array is sorted then",
        options:['Binary Search' , 'Two Pointers'],
        examples: "Example: Finding a target value, finding pair with sum K"
    },
    {
        condition: "If asked for all permutations/subsets then",
        options:['Backtracking'],
        examples: "Example: Generate all possible subsets, letter combinations of phone number"
    },
    {
        condition: "If given a tree then",
        options:['BFS','DFS'],
        examples: "Example: Tree traversal, find path sum, max depth"
    },
    {
        condition: "If given a graphs then",
        options:['BFS','DFS'],
        examples: "Example: Find connected components, shortest path"
    },
    {
        condition: "If given a linked list then",
        options:['Linked List'],
        examples: "Example: Find cycle, find middle node"
    },
    {
        condition: "If recursion is banned then",
        options:['Stack'],
        examples: "Example: Iterative tree traversal, evaluate expression"
    },
    {
        condition: "If must solve in-place then",
        options:['Swap corresponding values', 'Store one or more different values in the same pointer'],
        examples: "Example: Array manipulation, matrix rotation"
    },
    {
        condition: "If asked for maximum/minimum subarray/subset/options then",
        options:['Dynamic Programming'],
        examples: "Example: Maximum subarray sum, longest increasing subsequence"
    },
    {
        condition: "If asked for top/least K items then",
        options:['Heap','QuickSelect'],
        examples: "Example: K largest elements, K closest points"
    },
    {
        condition: "If asked for common strings then",
        options:['Map','Trie'],
        examples: "Example: Longest common prefix, word search"
    },
    {
        condition: "Else condition for common string",
        options:["Map/Set for O(1) time & O(n) space",
        "Sort input for O(nlogn) time and O(1) space"],
        examples: "Example: Two sum, contains duplicate"
    },
]