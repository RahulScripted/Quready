import logo from './logo.svg'
import bg from './bg.svg'
import copy from './copy.svg'
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
    contact,
    copy
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
        url: "https://www.geeksforgeeks.org/problems/square-pattern/0",
        solution: {
            description: "Geek is very fond of patterns. Once, his teacher gave him a square pattern to solve. He gave Geek an integer n and asked him to build a pattern.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void printSquare(int n) {
                                for(int i = 0;i < n;i++){
                                    for(int j = 0;j < n;j++){
                                        cout<<"*"<<" ";
                                    }
                                    cout<<endl;
                                }
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
                                x_copy = x

                                while x > 0:
                                    reverse = (reverse * 10) + (x % 10)
                                    x //= 10

                                return reverse == x_copy
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean isPalindrome(int x) {
                                if (x < 0) return false;

                                long reverse = 0;
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
        name: "Pattern 2",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/right-triangle/0",
        solution: {
            description: "Geek is very fond of patterns. Once, his teacher gave him a pattern of triangle to solve. He gave Geek an integer n and asked him to build a pattern.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void printTriangle(int n) {
                                for(int i = 0;i < n;i++){
                                    for(int j = 0;j <= i;j++){
                                        cout<<"*"<<" ";
                                    }
                                    cout<<endl;
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def printTriangle(self, n: int) -> None:
                                for i in range(n):
                                    for j in range(i + 1):
                                        print("*", end=" ")
                                    print()
                    `
                ,
                java:
                    `
                        class Solution {
                            public void printTriangle(int n) {
                                for (int i = 0; i < n; i++) {
                                    for (int j = 0; j <= i; j++) {
                                        System.out.print("* ");
                                    }
                                    System.out.println();
                                }
                            }
                        }
                    `
            },
        }
    },
    {
        id: 3,
        name: "Pattern 3",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-number/1",
        solution: {
            description: "Geek is very fond of patterns. Once, his teacher gave him a  pattern to solve. He gave Geek an integer n and asked him to build a pattern.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void printTriangle(int n) {
                                for(int i = 1;i <= n;i++){
                                    for(int j = 1;j <= i;j++){
                                        cout<<j<<" ";
                                    }
                                    cout<<endl;
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def printTriangle(self, n: int) -> None:
                                for i in range(1, n + 1):
                                    for j in range(1, i + 1):
                                        print(j, end=" ")
                                    print()
                    `
                ,
                java:
                    `
                        class Solution {
                            public void printTriangle(int n) {
                                for (int i = 1; i <= n; i++) {
                                    for (int j = 1; j <= i; j++) {
                                        System.out.print(j + " ");
                                    }
                                    System.out.println();
                                }
                            }
                        }
                    `
            },
        }
    },
    {
        id: 4,
        name: "Pattern 4",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-number-1661428795/1",
        solution: {
            description: "Geek is very fond of patterns. Once, his teacher gave him a  pattern to solve. He gave Geek an integer n and asked him to build a pattern.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void printTriangle(int n) {
                                for(int i = 1;i <= n;i++){
                                    for(int j = 1;j <= i;j++){
                                        cout<<i<<" ";
                                    }
                                    cout<<endl;
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def printTriangle(self, n: int) -> None:
                                for i in range(1, n + 1):
                                    for j in range(1, i + 1):
                                        print(i, end=" ")
                                    print()
                    `
                ,
                java:
                    `
                        class Solution {
                            public void printTriangle(int n) {
                                for (int i = 1; i <= n; i++) {
                                    for (int j = 1; j <= i; j++) {
                                        System.out.print(i + " ");
                                    }
                                    System.out.println();
                                }
                            }
                        }
                    `
            },
        }
    },
    {
        id: 5,
        name: "Pattern 5",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-pattern/0",
        solution: {
            description: "Geek is very fond of patterns. Once, his teacher gave him a pattern to solve. He gave Geek an integer n and asked him to build a pattern.",
            code:{
                cpp: 
                    `
                        class Solution{
                        public:
                            void printTriangle(int n) {
                                for(int i = n; i > 0;i--){
                                    for(int j = 0;j < i;j++){
                                        cout<<"*"<<" ";
                                    }
                                    cout<<endl;
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def printTriangle(self, n: int) -> None:
                                for i in range(n, 0, -1):
                                    for j in range(i):
                                        print("*", end=" ")
                                    print()
                    `
                ,
                java:
                    `
                        class Solution {
                            public void printTriangle(int n) {
                                for (int i = n; i > 0; i--) {
                                    for (int j = 0; j < i; j++) {
                                        System.out.print("* ");
                                    }
                                    System.out.println();
                                }
                            }
                        }
                    `
            },
        }
    },
    {
        id: 6,
        name: "Pattern 6",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-number-1661489840/0",
        solution: {
            description: "Geek is very fond of patterns. Once, his teacher gave him a pattern to solve. He gave Geek an integer n and asked him to build a pattern.",
            code:{
                cpp: 
                    `
                        class Solution{
                        public:
                            
                            void printTriangle(int n) {
                                for(int i = n;i > 0;i--){
                                    for(int j = 1;j <= i;j++){
                                        cout<<j<<" ";
                                    }
                                    cout<<endl;
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def isPalindrome(self, x: int) -> bool:
                                if x < 0:
                                    return False

                                reverse = 0
                                x_copy = x

                                while x > 0:
                                    reverse = (reverse * 10) + (x % 10)
                                    x //= 10

                                return reverse == x_copy
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean isPalindrome(int x) {
                                if (x < 0) return false;

                                long reverse = 0;
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
        id: 7,
        name: "Pattern 7",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-pattern-1661492263/0",
        solution: {
            description: "Geek is very fond of patterns. Once, his teacher gave him a pattern to solve. He gave Geek an integer n and asked him to build a pattern.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void printTriangle(int n) {
                                for(int i = 0;i < n;i++){
                                    for(int j = 0;j < (n - i -1);j++){
                                        cout<<" ";
                                    }
                                    for(int j = 0;j < (2 * i + 1);j++){
                                        cout<<"*";
                                    }
                                    cout<<endl;
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def printTriangle(self, n: int) -> None:
                                for i in range(n):
                                    # Print spaces
                                    for j in range(n - i - 1):
                                        print(" ", end="")
                                    # Print stars
                                    for j in range(2 * i + 1):
                                        print("*", end="")
                                    print()
                    `
                ,
                java:
                    `
                        class Solution {
                            public void printTriangle(int n) {
                                for (int i = 0; i < n; i++) {
                                    // Print spaces
                                    for (int j = 0; j < (n - i - 1); j++) {
                                        System.out.print(" ");
                                    }
                                    // Print stars
                                    for (int j = 0; j < (2 * i + 1); j++) {
                                        System.out.print("*");
                                    }
                                    System.out.println();
                                }
                            }
                        }
                    `
            },
        }
    },
    {
        id: 8,
        name: "Pattern 8",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-pattern-1661493231/0",
        solution: {
            description: "Geek is very fond of patterns. Once, his teacher gave him a pattern to solve. He gave Geek an integer n and asked him to build a pattern.",
            code:{
                cpp: 
                    `
                        class Solution{
                        public:
                            void printTriangle(int n) {
                                for(int i = 0;i < n;i++){
                                    for(int j = 0;j < i;j++){
                                        cout<<" ";
                                    }
                                    for(int j = 0;j < (2 * (n - i) - 1);j++){
                                        cout<<"*";
                                    }
                                    cout<<endl;
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def printTriangle(self, n):
                                for i in range(n):
                                    # Print leading spaces
                                    for j in range(i):
                                        print(" ", end="")
                                    # Print stars
                                    for j in range(2 * (n - i) - 1):
                                        print("*", end="")
                                    print() 
                    `
                ,
                java:
                    `
                        class Solution {
                            public void printTriangle(int n) {
                                for (int i = 0; i < n; i++) {
                                    // Print leading spaces
                                    for (int j = 0; j < i; j++) {
                                        System.out.print(" ");
                                    }
                                    // Print stars
                                    for (int j = 0; j < (2 * (n - i) - 1); j++) {
                                        System.out.print("*");
                                    }
                                    System.out.println();
                                }
                            }
                        }
                    `
            },
        }
    },
    {
        id: 9,
        name: "Pattern 9",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/pattern/0",
        solution: {
            description: "Geek is very fond of patterns. Once, his teacher gave him a star pattern to solve. He gave Geek an integer n and asked him to build a pattern.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void printDiamond(int n) {
                                // Upper Part
                                for(int i = 0;i < n;i++){
                                    for(int j = 0;j < (n - i - 1);j++){
                                        cout<<" ";
                                    }
                                    for(int j = 0;j < (i + 1);j++){
                                        if(j < i) cout<<"* ";
                                        else cout<<"*";
                                    }
                                    cout<<endl;
                                }
                                
                                // Lower Part
                                for(int i = n;i > 0;i--){
                                    for(int j = 0;j < (n - i);j++){
                                        cout<<" ";
                                    }
                                    for(int j = 0;j < i;j++){
                                        if(j < (i - 1)) cout<<"* ";
                                        else cout<<"*";
                                    }
                                    cout<<endl;
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def printDiamond(self, n):
                                # Upper part of the diamond
                                for i in range(n):
                                    for j in range(n - i - 1):
                                        print(" ", end="")
                                    for j in range(i + 1):
                                        if j < i: print("*", end=" ")
                                        else: print("*", end="")
                                    print()

                                for i in range(n - 1, 0, -1):
                                    for j in range(n - i):
                                        print(" ", end="")
                                    for j in range(i):
                                        if j < i - 1: print("*", end=" ")
                                        else: print("*", end="")
                                    print() 

                    `
                ,
                java:
                    `
                        class Solution {
                            public void printDiamond(int n) {
                                // Upper part of the diamond
                                for (int i = 0; i < n; i++) {
                                    for (int j = 0; j < (n - i - 1); j++) {
                                        System.out.print(" ");
                                    }
                                    for (int j = 0; j < i + 1; j++) {
                                        if (j < i) {
                                            System.out.print("* ");
                                        } else {
                                            System.out.print("*");
                                        }
                                    }
                                    System.out.println();
                                }

                                // Lower part of the diamond
                                for (int i = n - 1; i > 0; i--) {
                                    for (int j = 0; j < (n - i); j++) {
                                        System.out.print(" ");
                                    }
                                    for (int j = 0; j < i; j++) {
                                        if (j < i - 1) {
                                            System.out.print("* ");
                                        } else {
                                            System.out.print("*");
                                        }
                                    }
                                    System.out.println();
                                }
                            }
                        }
                    `
            },
        }
    },
    {
        id: 10,
        name: "Pattern 10",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-pattern-1661718013/0",
        solution: {
            description: "Geek is very fond of patterns. Once, his teacher gave him a star pattern to solve. He gave Geek an integer n and asked him to build a pattern.",
            code:{
                cpp: 
                    `
                        class Solution{
                        public:
                            void printTriangle(int n) {
                                for(int i = 0;i < n;i++){
                                    for(int j = 0;j <= i;j++){
                                        cout<<"* ";
                                    }
                                    cout<<endl;
                                }
                                for(int i = (n - 1);i > 0;i--){
                                    for(int j = 0;j < i;j++){
                                        cout<<"* ";
                                    }
                                    cout<<endl;
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def printTriangle(self, n):
                                for i in range(n):
                                    for j in range(i + 1):
                                        print("*", end=" ")
                                    print()
                                for i in range(n - 1, 0, -1):
                                    for j in range(i):
                                        print("*", end=" ")
                                    print()
                    `
                ,
                java:
                    `
                        class Solution {
                            public void printTriangle(int n) {
                                for (int i = 0; i < n; i++) {
                                    for (int j = 0; j <= i; j++) {
                                        System.out.print("* ");
                                    }
                                    System.out.println();
                                }
                                for (int i = n - 1; i > 0; i--) {
                                    for (int j = 0; j < i; j++) {
                                        System.out.print("* ");
                                    }
                                    System.out.println();
                                }
                            }
                    `
            },
        }
    },
    {
        id: 11,
        name: "Pattern 11",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/triangle-pattern-1661718455/0",
        solution: {
            description: "Geek is very fond of patterns. Once, his teacher gave him a pattern to solve. He gave Geek an integer n and asked him to build a pattern.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void printTriangle(int n) {
                                for(int i = 0;i < n;i++){
                                    for(int j = 0;j <= i;j++){
                                        if((i + j) % 2 == 0) cout<<"1 ";
                                        else cout<<"0 ";
                                    }
                                    cout<<endl;
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def printTriangle(self, n):
                                for i in range(n):
                                    for j in range(i + 1):
                                        if (i + j) % 2 == 0:
                                            print("1", end=" ")
                                        else:
                                            print("0", end=" ")
                                    print()
                    `
                ,
                java:
                    `
                        class Solution {
                            public void printTriangle(int n) {
                                for (int i = 0; i < n; i++) {
                                    for (int j = 0; j <= i; j++) {
                                        if ((i + j) % 2 == 0) {
                                            System.out.print("1 ");
                                        } else {
                                            System.out.print("0 ");
                                        }
                                    }
                                    System.out.println();
                                }
                            }
                    `
            },
        }
    },
]

export const ArrayData = [
    {
        id: 1,
        name: "Two Sum",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/two-sum/",
        solution: {
            description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            vector<int> twoSum(vector<int>& nums, int target) {
                                unordered_map<int, int> pairIdx;

                                for (int i = 0; i < nums.size(); ++i) {
                                    int num = nums[i];
                                    if (pairIdx.find(target - num) != pairIdx.end()) {
                                        return {i, pairIdx[target - num]};
                                    }
                                    pairIdx[num] = i;
                                }

                                return {};        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def twoSum(self, nums: List[int], target: int) -> List[int]:
                                pair_idx = {}

                                for i, num in enumerate(nums):
                                    if target - num in pair_idx:
                                        return [i, pair_idx[target - num]]
                                    pair_idx[num] = i
                    `
                ,
                java:
                    `
                        class Solution {
                            public int[] twoSum(int[] nums, int target) {
                                Map<Integer, Integer> pairIdx = new HashMap<>();

                                for (int i = 0; i < nums.length; i++) {
                                    int num = nums[i];
                                    if (pairIdx.containsKey(target - num)) {
                                        return new int[] { i, pairIdx.get(target - num) };
                                    }
                                    pairIdx.put(num, i);
                                }

                                return new int[] {};        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 2,
        name: "Remove Duplicates from Sorted Array",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        solution: {
            description: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int removeDuplicates(vector<int>& nums) {
                                if (nums.empty()) return 0;

                                int i = 1;

                                for (int j = 1; j < nums.size(); j++) {
                                    if (nums[j] != nums[i - 1]) {
                                        nums[i] = nums[j];
                                        i++;
                                    }
                                }

                                return i;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def removeDuplicates(self, nums: List[int]) -> int:
                                i = 1

                                for j in range(1, len(nums)):
                                    if nums[j] != nums[i - 1]:
                                        nums[i] = nums[j]
                                        i += 1
                                
                                return i
                    `
                ,
                java:
                    `
                        class Solution {
                            public int removeDuplicates(int[] nums) {
                                if (nums.length == 0) return 0;

                                int i = 1;

                                for (int j = 1; j < nums.length; j++) {
                                    if (nums[j] != nums[i - 1]) {
                                        nums[i] = nums[j];
                                        i++;
                                    }
                                }

                                return i;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 3,
        name: "Search Insert Position",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/search-insert-position/",
        solution: {
            description: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int searchInsert(vector<int>& nums, int target) {
                                int left = 0;
                                int right = nums.size() - 1;

                                while (left <= right) {
                                    int mid = left + (right - left) / 2;

                                    if (nums[mid] == target) {
                                        return mid;
                                    } else if (nums[mid] > target) {
                                        right = mid - 1;
                                    } else {
                                        left = mid + 1;
                                    }
                                }

                                return left;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def searchInsert(self, nums: List[int], target: int) -> int:
                                left = 0
                                right = len(nums) - 1

                                while left <= right:
                                    mid = (left + right) // 2

                                    if nums[mid] == target:
                                        return mid
                                    elif nums[mid] > target:
                                        right = mid - 1
                                    else:
                                        left = mid + 1
                                return left
                    `
                ,
                java:
                    `
                        class Solution {
                            public int searchInsert(int[] nums, int target) {
                                int left = 0;
                                int right = nums.length - 1;

                                while (left <= right) {
                                    int mid = left + (right - left) / 2;

                                    if (nums[mid] == target) {
                                        return mid;
                                    } else if (nums[mid] > target) {
                                        right = mid - 1;
                                    } else {
                                        left = mid + 1;
                                    }
                                }

                                return left;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 4,
        name: "Merge Sorted Array",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/merge-sorted-array/",
        solution: {
            description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
                                int mIdx = m - 1;
                                int nIdx = n - 1;
                                int right = m + n - 1;

                                while (nIdx >= 0) {
                                    if (mIdx >= 0 && nums1[mIdx] > nums2[nIdx]) {
                                        nums1[right] = nums1[mIdx];
                                        mIdx--;
                                    } else {
                                        nums1[right] = nums2[nIdx];
                                        nIdx--;
                                    }
                                    right--;
                                }        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
                                mIdx = m - 1
                                nIdx = n - 1 
                                right = m + n - 1

                                while nIdx >= 0:
                                    if mIdx >= 0 and nums1[mIdx] > nums2[nIdx]:
                                        nums1[right] = nums1[mIdx]
                                        mIdx -= 1
                                    else:
                                        nums1[right] = nums2[nIdx]
                                        nIdx -= 1

                                    right -= 1
                    `
                ,
                java:
                    `
                        class Solution {
                            public void merge(int[] nums1, int m, int[] nums2, int n) {
                                int mIdx = m - 1;
                                int nIdx = n - 1;
                                int right = m + n - 1;

                                while (nIdx >= 0) {
                                    if (mIdx >= 0 && nums1[mIdx] > nums2[nIdx]) {
                                        nums1[right] = nums1[mIdx];
                                        mIdx--;
                                    } else {
                                        nums1[right] = nums2[nIdx];
                                        nIdx--;
                                    }
                                    right--;
                                }        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 5,
        name: "Pascal's Triangle",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/pascals-triangle/",
        solution: {
            description: "Given an integer numRows, return the first numRows of Pascal's triangle.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            vector<vector<int>> generate(int numRows) {
                                std::vector<std::vector<int>> res;
                                res.push_back({1});

                                for (int i = 0; i < numRows - 1; i++) {
                                    std::vector<int> dummyRow = {0};
                                    dummyRow.insert(dummyRow.end(), res.back().begin(), res.back().end());
                                    dummyRow.push_back(0);
                                    std::vector<int> row;

                                    for (int j = 0; j < dummyRow.size() - 1; j++) {
                                        row.push_back(dummyRow[j] + dummyRow[j + 1]);
                                    }

                                    res.push_back(row);
                                }

                                return res;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def generate(self, numRows: int) -> List[List[int]]:
                                res = [[1]]

                                for _ in range(numRows - 1):
                                    dummy_row = [0] + res[-1] + [0]
                                    row = []

                                    for i in range(len(res[-1]) + 1):
                                        row.append(dummy_row[i] + dummy_row[i+1])
                                    res.append(row)
                                
                                return res
                    `
                ,
                java:
                    `
                        class Solution {
                            public List<List<Integer>> generate(int numRows) {
                                List<List<Integer>> res = new ArrayList<>();
                                res.add(List.of(1));

                                for (int i = 0; i < numRows - 1; i++) {
                                    List<Integer> dummyRow = new ArrayList<>();
                                    dummyRow.add(0);
                                    dummyRow.addAll(res.get(res.size() - 1));
                                    dummyRow.add(0);
                                    List<Integer> row = new ArrayList<>();

                                    for (int j = 0; j < dummyRow.size() - 1; j++) {
                                        row.add(dummyRow.get(j) + dummyRow.get(j + 1));
                                    }

                                    res.add(row);
                                }

                                return res;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 6,
        name: "Best Time to Buy and Sell Stock",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        solution: {
            description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int maxProfit(vector<int>& prices) {
                                int buyPrice = prices[0];
                                int profit = 0;

                                for (int i = 1; i < prices.size(); i++) {
                                    if (buyPrice > prices[i]) {
                                        buyPrice = prices[i];
                                    }

                                    profit = max(profit, prices[i] - buyPrice);
                                }

                                return profit;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def maxProfit(self, prices: List[int]) -> int:
                                buy_price = prices[0]
                                profit = 0

                                for p in prices[1:]:
                                    if buy_price > p:
                                        buy_price = p
                                    
                                    profit = max(profit, p - buy_price)
                                
                                return profit
                    `
                ,
                java:
                    `
                        class Solution {
                            public int maxProfit(int[] prices) {
                                int buyPrice = prices[0];
                                int profit = 0;

                                for (int i = 1; i < prices.length; i++) {
                                    if (buyPrice > prices[i]) {
                                        buyPrice = prices[i];
                                    }

                                    profit = Math.max(profit, prices[i] - buyPrice);
                                }

                                return profit;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 7,
        name: "Container With Most Water",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/container-with-most-water/",
        solution: {
            description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int maxArea(vector<int>& height) {
                                int maxArea = 0;
                                int left = 0;
                                int right = height.size() - 1;

                                while (left < right) {
                                    maxArea = max(maxArea, (right - left) * min(height[left], height[right]));

                                    if (height[left] < height[right]) {
                                        left++;
                                    } else {
                                        right--;
                                    }
                                }

                                return maxArea;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def maxArea(self, height: List[int]) -> int:
                                max_area = 0
                                left = 0
                                right = len(height) - 1

                                while left < right:
                                    max_area = max(max_area, (right - left) * min(height[left], height[right]))

                                    if height[left] < height[right]:
                                        left += 1
                                    else:
                                        right -= 1
                                
                                return max_area
                    `
                ,
                java:
                    `
                        class Solution {
                            public int maxArea(int[] height) {
                                int maxArea = 0;
                                int left = 0;
                                int right = height.length - 1;

                                while (left < right) {
                                    maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

                                    if (height[left] < height[right]) {
                                        left++;
                                    } else {
                                        right--;
                                    }
                                }

                                return maxArea;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 8,
        name: "Next Permutation",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/next-permutation/",
        solution: {
            description: "Given an array of integers nums, find the next permutation of nums.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void nextPermutation(vector<int>& nums) {
                                int n = nums.size(), i = n - 2;
                                
                                while (i >= 0 && nums[i] >= nums[i + 1]) {
                                    i--;
                                }
                                
                                if (i >= 0) {
                                    int j = n - 1;
                                    while (nums[j] <= nums[i]) {
                                        j--;
                                    }
                                    swap(nums[i], nums[j]);
                                }
                                
                                reverse(nums.begin() + i + 1, nums.end());
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def nextPermutation(self, nums: List[int]) -> None:
                                n = len(nums)
                                i = n - 2
                                
                                while i >= 0 and nums[i] >= nums[i + 1]:
                                    i -= 1
                                
                                if i >= 0:
                                    j = n - 1
                                    while nums[j] <= nums[i]:
                                        j -= 1
                                    nums[i], nums[j] = nums[j], nums[i]
                                
                                nums[i + 1:] = reversed(nums[i + 1:])
                   `
                ,
                java:
                    `
                        class Solution {
                            public void nextPermutation(int[] nums) {
                                int n = nums.length, i = n - 2;
                                
                                while (i >= 0 && nums[i] >= nums[i + 1]) {
                                    i--;
                                }
                                
                                if (i >= 0) {
                                    int j = n - 1;
                                    while (nums[j] <= nums[i]) {
                                        j--;
                                    }
                                    int temp = nums[i];
                                    nums[i] = nums[j];
                                    nums[j] = temp;
                                }
                                
                                reverse(nums, i + 1, n - 1);
                            }
                            
                            private void reverse(int[] nums, int start, int end) {
                                while (start < end) {
                                    int temp = nums[start];
                                    nums[start] = nums[end];
                                    nums[end] = temp;
                                    start++;
                                    end--;
                                }
                            }
                        }
                    `
            },
        }
    },
    {
        id: 9,
        name: "Search in Rotated Sorted Array",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        solution: {
            description: "Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int search(vector<int>& nums, int target) {
                                int left = 0;
                                int right = nums.size() - 1;

                                while (left <= right) {
                                    int mid = (left + right) / 2;

                                    if (nums[mid] == target) {
                                        return mid;
                                    } else if (nums[mid] >= nums[left]) {
                                        if (nums[left] <= target && target <= nums[mid]) {
                                            right = mid - 1;
                                        } else {
                                            left = mid + 1;
                                        }
                                    } else {
                                        if (nums[mid] <= target && target <= nums[right]) {
                                            left = mid + 1;
                                        } else {
                                            right = mid - 1;
                                        }
                                    }
                                }

                                return -1;        
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def search(self, nums: List[int], target: int) -> int:

                                left = 0
                                right = len(nums) - 1

                                while left <= right:
                                    mid = (left + right) // 2

                                    if nums[mid] == target:
                                        return mid
                                    elif nums[mid] >= nums[left]:
                                        if nums[left] <= target <= nums[mid]:
                                            right = mid - 1
                                        else:
                                            left = mid + 1
                                    else:
                                        if nums[mid] <= target <= nums[right]:
                                            left = mid + 1
                                        else:
                                            right = mid - 1
                                
                                return -1
                   `
                ,
                java:
                    `
                        class Solution {
                            public int search(int[] nums, int target) {
                                int left = 0;
                                int right = nums.length - 1;

                                while (left <= right) {
                                    int mid = (left + right) / 2;

                                    if (nums[mid] == target) {
                                        return mid;
                                    } else if (nums[mid] >= nums[left]) {
                                        if (nums[left] <= target && target <= nums[mid]) {
                                            right = mid - 1;
                                        } else {
                                            left = mid + 1;
                                        }
                                    } else {
                                        if (nums[mid] <= target && target <= nums[right]) {
                                            left = mid + 1;
                                        } else {
                                            right = mid - 1;
                                        }
                                    }
                                }

                                return -1;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 10,
        name: "Valid Sudoku",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/valid-sudoku/",
        solution: {
            description: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules: 1. Each row must contain the digits 1-9 without repetition. 2. Each column must contain the digits 1-9 without repetition. 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool isValidSudoku(vector<vector<char>>& board) {
                                unordered_set<char> rows[9];
                                unordered_set<char> cols[9];
                                unordered_set<char> boxes[9];

                                for (int r = 0; r < 9; ++r) {
                                    for (int c = 0; c < 9; ++c) {
                                        if (board[r][c] == '.') {
                                            continue;
                                        }

                                        char value = board[r][c];
                                        int boxIndex = (r / 3) * 3 + (c / 3);

                                        if (rows[r].count(value) || cols[c].count(value) || boxes[boxIndex].count(value)) {
                                            return false;
                                        }

                                        rows[r].insert(value);
                                        cols[c].insert(value);
                                        boxes[boxIndex].insert(value);
                                    }
                                }

                                return true;        
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def isValidSudoku(self, board: List[List[str]]) -> bool:
                                rows = defaultdict(set)
                                cols = defaultdict(set)
                                boxes = defaultdict(set)
                                
                                for r in range(9):
                                    for c in range(9):
                                        if board[r][c] == ".":
                                            continue
                                        
                                        if board[r][c] in rows[r] or board[r][c] in cols[c] or board[r][c] in boxes[(r // 3, c // 3)]:
                                            return False
                                        
                                        rows[r].add(board[r][c])
                                        cols[c].add(board[r][c])
                                        boxes[(r // 3, c // 3)].add(board[r][c])
                                
                                return True
                   `
                ,
                java:
                    `
                        class Solution {
                            public boolean isValidSudoku(char[][] board) {
                                HashSet<Character>[] rows = new HashSet[9];
                                HashSet<Character>[] cols = new HashSet[9];
                                HashSet<Character>[] boxes = new HashSet[9];

                                for (int i = 0; i < 9; i++) {
                                    rows[i] = new HashSet<>();
                                    cols[i] = new HashSet<>();
                                    boxes[i] = new HashSet<>();
                                }

                                for (int r = 0; r < 9; r++) {
                                    for (int c = 0; c < 9; c++) {
                                        if (board[r][c] == '.') {
                                            continue;
                                        }

                                        char value = board[r][c];
                                        int boxIndex = (r / 3) * 3 + (c / 3);

                                        if (rows[r].contains(value) || cols[c].contains(value) || boxes[boxIndex].contains(value)) {
                                            return false;
                                        }

                                        rows[r].add(value);
                                        cols[c].add(value);
                                        boxes[boxIndex].add(value);
                                    }
                                }

                                return true;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 11,
        name: "Rotate Image",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/rotate-image/",
        solution: {
            description: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void rotate(vector<vector<int>>& matrix) {
                                int edgeLength = matrix.size();

                                int top = 0;
                                int bottom = edgeLength - 1;

                                while (top < bottom) {
                                    for (int col = 0; col < edgeLength; col++) {
                                        int temp = matrix[top][col];
                                        matrix[top][col] = matrix[bottom][col];
                                        matrix[bottom][col] = temp;
                                    }
                                    top++;
                                    bottom--;
                                }

                                for (int row = 0; row < edgeLength; row++) {
                                    for (int col = row + 1; col < edgeLength; col++) {
                                        int temp = matrix[row][col];
                                        matrix[row][col] = matrix[col][row];
                                        matrix[col][row] = temp;
                                    }
                                }        
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def rotate(self, matrix: List[List[int]]) -> None:
                                edge_length = len(matrix)

                                top = 0
                                bottom = edge_length - 1

                                while top < bottom:
                                    for col in range(edge_length):
                                        temp = matrix[top][col]
                                        matrix[top][col] = matrix[bottom][col]
                                        matrix[bottom][col] = temp
                                    top += 1
                                    bottom -= 1

                                for row in range(edge_length):
                                    for col in range(row+1, edge_length):
                                        temp = matrix[row][col]
                                        matrix[row][col] = matrix[col][row]
                                        matrix[col][row] = temp
                                
                                return matrix
                   `
                ,
                java:
                    `
                        class Solution {
                            public void rotate(int[][] matrix) {
                                int edgeLength = matrix.length;

                                int top = 0;
                                int bottom = edgeLength - 1;

                                while (top < bottom) {
                                    for (int col = 0; col < edgeLength; col++) {
                                        int temp = matrix[top][col];
                                        matrix[top][col] = matrix[bottom][col];
                                        matrix[bottom][col] = temp;
                                    }
                                    top++;
                                    bottom--;
                                }

                                for (int row = 0; row < edgeLength; row++) {
                                    for (int col = row + 1; col < edgeLength; col++) {
                                        int temp = matrix[row][col];
                                        matrix[row][col] = matrix[col][row];
                                        matrix[col][row] = temp;
                                    }
                                }        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 12,
        name: "Spiral Matrix",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/spiral-matrix/",
        solution: {
            description: "Given an m x n matrix, return all elements of the matrix in spiral order.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            vector<int> spiralOrder(vector<vector<int>>& matrix) {
                                int rows = matrix.size();
                                int cols = matrix[0].size();
                                int x = 0;
                                int y = 0;
                                int dx = 1;
                                int dy = 0;
                                vector<int> res;

                                for (int i = 0; i < rows * cols; i++) {
                                    res.push_back(matrix[y][x]);
                                    matrix[y][x] = -101;

                                    if (!(0 <= x + dx && x + dx < cols && 0 <= y + dy && y + dy < rows) || matrix[y+dy][x+dx] == -101) {
                                        int temp = dx;
                                        dx = -dy;
                                        dy = temp;
                                    }

                                    x += dx;
                                    y += dy;
                                }

                                return res;
                            }        
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
                                rows, cols = len(matrix), len(matrix[0])
                                x, y, dx, dy = 0, 0, 1, 0
                                res = []

                                for _ in range(rows * cols):
                                    res.append(matrix[y][x])
                                    matrix[y][x] = "."

                                    if not 0 <= x + dx < cols or not 0 <= y + dy < rows or matrix[y+dy][x+dx] == ".":
                                        dx, dy = -dy, dx
                                    
                                    x += dx
                                    y += dy
                                
                                return res
                   `
                ,
                java:
                    `
                        class Solution {
                        public List<Integer> spiralOrder(int[][] matrix) {
                            int rows = matrix.length;
                            int cols = matrix[0].length;
                            int x = 0;
                            int y = 0;
                            int dx = 1;
                            int dy = 0;
                            List<Integer> res = new ArrayList<>();

                            for (int i = 0; i < rows * cols; i++) {
                                res.add(matrix[y][x]);
                                matrix[y][x] = -101; // the range of numbers in matrix is from -100 to 100

                                if (!(0 <= x + dx && x + dx < cols && 0 <= y + dy && y + dy < rows) || matrix[y+dy][x+dx] == -101) {
                                    int temp = dx;
                                    dx = -dy;
                                    dy = temp;
                                }

                                x += dx;
                                y += dy;
                            }

                            return res;        
                        }
                    }
                    `
            },
        }
    },
    {
        id: 13,
        name: "Sort Colors",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/sort-colors/",
        solution: {
            description: "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void sortColors(vector<int>& nums) {
                                int red = 0;
                                int white = 0;
                                int blue = nums.size() - 1;
                                
                                while (white <= blue) {
                                    if (nums[white] == 0) {
                                        swap(nums[white], nums[red]);
                                        red++;
                                        white++;
                                    } else if (nums[white] == 1) {
                                        white++;
                                    } else {
                                        swap(nums[white], nums[blue]);
                                        blue--;
                                    }
                                }
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def sortColors(self, nums: List[int]) -> None:
                                red = 0
                                white = 0
                                blue = len(nums) - 1
                                
                                while white <= blue:
                                    if nums[white] == 0:
                                        nums[white], nums[red] = nums[red], nums[white]
                                        red += 1
                                        white += 1
                                    elif nums[white] == 1:
                                        white += 1
                                    else:
                                        nums[white], nums[blue] = nums[blue], nums[white]
                                        blue -= 1
                   `
                ,
                java:
                    `
                        class Solution {
                            public void sortColors(int[] nums) {
                                int red = 0;
                                int white = 0;
                                int blue = nums.length - 1;
                                
                                while (white <= blue) {
                                    if (nums[white] == 0) {
                                        int temp = nums[white];
                                        nums[white] = nums[red];
                                        nums[red] = temp;
                                        red++;
                                        white++;
                                    } else if (nums[white] == 1) {
                                        white++;
                                    } else {
                                        int temp = nums[white];
                                        nums[white] = nums[blue];
                                        nums[blue] = temp;
                                        blue--;
                                    }
                                }
                            }
                        }
                    `
            },
        }
    },
    {
        id: 14,
        name: "First Missing Positive",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/first-missing-positive/",
        solution: {
            description: "Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int firstMissingPositive(vector<int>& nums) {

                                nums.erase(remove_if(nums.begin(), nums.end(), [](int n) { return n <= 0; }), nums.end());

                                for (int i = 0; i < nums.size(); i++) {
                                    int n = abs(nums[i]);
                                    if (n <= nums.size() && nums[n - 1] > 0) {
                                        nums[n - 1] = -nums[n - 1];
                                    }
                                }

                                for (int i = 0; i < nums.size(); i++) {
                                    if (nums[i] > 0) {
                                        return i + 1;
                                    }
                                }

                                return nums.size() + 1;        
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def firstMissingPositive(self, nums: List[int]) -> int:

                                nums = [n for n in nums if n > 0]

                                for n in nums:
                                    idx = abs(n) - 1
                                    if idx < len(nums) and nums[idx] > 0:
                                        nums[idx] *= -1
                                
                                for i in range(len(nums)):
                                    if nums[i] > 0:
                                        return i + 1
                                
                                return len(nums) + 1
                   `
                ,
                java:
                    `
                        class Solution {
                            public int firstMissingPositive(int[] nums) {
                            List<Integer> numsList = new ArrayList<Integer>();
                                
                                for (int i = 0; i < nums.length; i++) {
                                    if (nums[i] > 0) {
                                        numsList.add(nums[i]);
                                    }
                                }
                                
                                for (int i = 0; i < numsList.size(); i++) {
                                    int n = Math.abs(numsList.get(i));
                                    if (n <= numsList.size() && numsList.get(n - 1) > 0) {
                                        numsList.set(n - 1, -numsList.get(n - 1));
                                    }
                                }
                                
                                for (int i = 0; i < numsList.size(); i++) {
                                    if (numsList.get(i) > 0) {
                                        return i + 1;
                                    }
                                }
                                
                                return numsList.size() + 1;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 15,
        name: "Text Justification",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/text-justification/",
        solution: {
            description: "Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified. You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters. Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right. For the last line of text, it should be left-justified, and no extra space is inserted between words.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            vector<string> fullJustify(vector<string>& words, int maxWidth) {
                                vector<string> res;
                                const int n = words.size();
                                int begin = 0, len = 0;
                                for (int i = 0; i < n; ++i) {
                                    if (len + words[i].size() + (i - begin) > maxWidth) {
                                        res.emplace_back(connect(words, maxWidth, begin, i, len, false));
                                        begin = i;
                                        len = 0;
                                    }
                                    len += words[i].size();
                                }
                                res.emplace_back(connect(words, maxWidth, begin, n, len, true));
                                return res;
                            }
                        private:
                            string connect(const vector<string>& words, int maxWidth,
                                        int begin, int end, int len,
                                        bool is_last) {
                                string s;
                                int n = end - begin;
                                for (int i = 0; i < n; ++i) {
                                    s += words[begin + i];
                                    addSpaces(i, n - 1, maxWidth - len, is_last, &s);
                                }
                                if (s.size() < maxWidth) {
                                    s.append(maxWidth - s.size(), ' ');
                                }
                                return s;
                            }
                            void addSpaces(int i, int spaceCnt, int maxWidth, bool is_last, string *s) {
                                if (i < spaceCnt) {
                                    int spaces = is_last ? 1 : maxWidth / spaceCnt + (i < maxWidth % spaceCnt);
                                    s->append(spaces, ' ');
                                }
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
                                res = []
                                
                                cur_wlist  = []
                                cur_ch_cnt = 0   # for the space consideration
                            
                                for w in words: 
                                    if cur_ch_cnt + len(cur_wlist) + len(w) > maxWidth:
                                        for i in range(maxWidth - cur_ch_cnt):  # insert space
                                            cur_wlist[i%(len(cur_wlist) - 1 or 1)] += ' '
                                    
                                        res.append(''.join(cur_wlist)) # insert a this row 
                                        cur_wlist, cur_ch_cnt = [], 0 # prepare a new row, resetting
                                        
                                    cur_wlist += [w]
                                    cur_ch_cnt += len(w)
                                    
                                return res + [' '.join(cur_wlist).ljust(maxWidth)]
                   `
                ,
                java:
                    `
                        class Solution {
                            public List<String> fullJustify(String[] words, int maxWidth) {

                                List<String> result = new ArrayList<>();

                                int word = 0;

                                while(word<words.length){

                                    int j = word-1;
                                    int characters = 0;


                                    while(j+1<words.length && characters+words[j+1].length() + j+1-word<=maxWidth)
                                    {
                                        j++;
                                        characters+=words[j].length();
                                    }
                                    result.add(line(words , word , j, characters , maxWidth));
                                    word = j+1;
                                }
                                return result;
                            }
                            public String line(String words[],int start,int end, int Linelen,int max)
                            {
                                StringBuilder a = new StringBuilder();
                                int p=1,q=0;
                                if(end!=start)
                                {
                                    p=(max-Linelen)/(end-start);
                                    q=(max-Linelen)%(end-start);
                                }
                                
                                for(int i=start;i<=end;i++)
                                {
                                    a.append(words[i]);
                                    if(i!=end)
                                    {
                                        if(end==words.length-1) a.append(" ");
                                        else {
                                            for(int j=1;j<=p;j++) a.append(" ");
                                            if(q-->=1) a.append(" ");
                                        }
                                    }
                                }
                                while(a.length()<max) a.append(" ");
                                return a.toString();
                            }
                        }
                    `
            },
        }
    },
    {
        id: 16,
        name: "Trapping Rain Water",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/trapping-rain-water/",
        solution: {
            description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int trap(vector<int>& height) {
                                int left = 0;
                                int right = height.size() - 1;
                                int leftMax = height[left];
                                int rightMax = height[right];
                                int water = 0;

                                while (left < right) {
                                    if (leftMax < rightMax) {
                                        left++;
                                        leftMax = max(leftMax, height[left]);
                                        water += leftMax - height[left];
                                    } else {
                                        right--;
                                        rightMax = max(rightMax, height[right]);
                                        water += rightMax - height[right];
                                    }
                                }

                                return water;        
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def trap(self, height: List[int]) -> int:
                                left = 0
                                right = len(height) - 1
                                left_max = height[left]
                                right_max = height[right]
                                water = 0

                                while left < right:
                                    if left_max < right_max:
                                        left += 1
                                        left_max = max(left_max, height[left])
                                        water += left_max - height[left]
                                    else:
                                        right -= 1
                                        right_max = max(right_max, height[right])
                                        water += right_max - height[right]
                                
                                return water
                   `
                ,
                java:
                    `
                        class Solution {
                            public int trap(int[] height) {
                                int left = 0;
                                int right = height.length - 1;
                                int leftMax = height[left];
                                int rightMax = height[right];
                                int water = 0;

                                while (left < right) {
                                    if (leftMax < rightMax) {
                                        left++;
                                        leftMax = Math.max(leftMax, height[left]);
                                        water += leftMax - height[left];
                                    } else {
                                        right--;
                                        rightMax = Math.max(rightMax, height[right]);
                                        water += rightMax - height[right];
                                    }
                                }

                                return water;        
                            }
                        }
                    `
            },
        }
    },
]

export const StringData = [
    {
        id: 1,
        name: "Valid Anargam",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/valid-anagram/",
        url: "https://leetcode.com/problems/valid-anagram/",
        solution: {
            description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool isAnagram(string s, string t) {
                                if (s.length() != t.length()) {
                                    return false;
                                }

                                unordered_map<char, int> sCount, tCount;

                                for (int i = 0; i < s.length(); i++) {
                                    sCount[s[i]] = 1 + sCount[s[i]];
                                    tCount[t[i]] = 1 + tCount[t[i]];
                                }

                                return sCount == tCount;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def isAnagram(self, s: str, t: str) -> bool:    
                                if len(s) != len(t):
                                    return False
                                
                                s_count = {}
                                t_count = {}
                                
                                for i in range(len(s)):
                                    s_count[s[i]] = 1 + s_count.get(s[i], 0)
                                    t_count[t[i]] = 1 + t_count.get(t[i], 0)
                                
                                return s_count == t_count
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean isAnagram(String s, String t) {
                                if (s.length() != t.length()) {
                                    return false;
                                }

                                HashMap<Character, Integer> sCount = new HashMap<>();
                                HashMap<Character, Integer> tCount = new HashMap<>();

                                for (int i = 0; i < s.length(); i++) {
                                    sCount.put(s.charAt(i), 1 + sCount.getOrDefault(s.charAt(i), 0));
                                    tCount.put(t.charAt(i), 1 + tCount.getOrDefault(t.charAt(i), 0));
                                }

                                return sCount.equals(tCount);        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 2,
        name: "Increasing Decreasing String",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/increasing-decreasing-string/",
        solution: {
            description: "You are given a string s. Reorder the string using the following algorithm: Remove the smallest character from s and append it to the result. Remove the smallest character from s that is greater than the last appended character, and append it to the result. Repeat step 2 until no more characters can be removed. Remove the largest character from s and append it to the result. Remove the largest character from s that is smaller than the last appended character, and append it to the result. Repeat step 5 until no more characters can be removed. Repeat steps 1 through 6 until all characters from s have been removed. If the smallest or largest character appears more than once, you may choose any occurrence to append to the result. Return the resulting string after reordering s using this algorithm.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            string sortString(string s) {
                                string result = "";
                                while (!s.empty()) {
                                    set<char> unique(s.begin(), s.end());
                                    for (char letter : unique) {
                                        s.erase(remove(s.begin(), s.end(), letter), s.end());
                                        result += letter;
                                    }
                                    unique = set<char>(s.begin(), s.end());
                                    for (auto it = unique.rbegin(); it != unique.rend(); ++it) {
                                        s.erase(remove(s.begin(), s.end(), *it), s.end());
                                        result += *it;
                                    }
                                }
                                return result;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def sortString(self, s: str) -> str:
                                s = list(s)
                                result = ''
                                while s:
                                    for letter in sorted(set(s)):
                                        s.remove(letter)
                                        result += letter
                                    for letter in sorted(set(s), reverse=True):
                                        s.remove(letter)
                                        result += letter
                                return result
                    `
                ,
                java:
                    `
                        class Solution {
                            public String sortString(String s) {
                                StringBuilder result = new StringBuilder();
                                List<Character> charList = new ArrayList<>();
                                for (char c : s.toCharArray()) {
                                    charList.add(c);
                                }
                                
                                while (!charList.isEmpty()) {
                                    TreeSet<Character> unique = new TreeSet<>(charList);
                                    for (char letter : unique) {
                                        charList.remove(Character.valueOf(letter));
                                        result.append(letter);
                                    }
                                    
                                    TreeSet<Character> reversedUnique = new TreeSet<>(Collections.reverseOrder());
                                    reversedUnique.addAll(charList);
                                    for (char letter : reversedUnique) {
                                        charList.remove(Character.valueOf(letter));
                                        result.append(letter);
                                    }
                                }
                                
                                return result.toString();
                            }
                        }
                    `
            },
        }
    },
    {
        id: 3,
        name: "Valid Palindrome",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/valid-palindrome/",
        solution: {
            description: "Given a string s, return true if it is a palindrome, or false otherwise.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool isPalindrome(string s) {
                                string filtered;
                                for (char c : s) {
                                    if (isalnum(c)) {
                                        filtered += tolower(c);
                                    }
                                }

                                int left = 0;
                                int right = filtered.size() - 1;

                                while (left < right) {
                                    if (filtered[left] != filtered[right]) {
                                        return false;
                                    }
                                    left++;
                                    right--;
                                }

                                return true;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def isPalindrome(self, s: str) -> bool:
                                s = ''.join(c.lower() for c in s if c.isalnum())
                                left = 0 
                                right = len(s) - 1

                                while left < right:
                                    if s[left] != s[right]:
                                        return False
                                    left += 1
                                    right -= 1

                                return True
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean isPalindrome(String s) {
                                s = s.toLowerCase().replaceAll("[^a-z0-9]", "");
                                int left = 0;
                                int right = s.length() - 1;

                                while (left < right) {
                                    if (s.charAt(left) != s.charAt(right)) {
                                        return false;
                                    }
                                    left++;
                                    right--;
                                }
                                return true;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 4,
        name: "Longest Common Prefix",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/longest-common-prefix/",
        solution: {
            description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            string longestCommonPrefix(vector<string>& strs) {
                                if (strs.empty()) return "";

                                string pref = strs[0];
                                int prefLen = pref.length();

                                for (int i = 1; i < strs.size(); i++) {
                                    string s = strs[i];
                                    while (prefLen > s.length() || pref != s.substr(0, prefLen)) {
                                        prefLen--;
                                        if (prefLen == 0) {
                                            return "";
                                        }
                                        pref = pref.substr(0, prefLen);
                                    }
                                }

                                return pref;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def longestCommonPrefix(self, strs: List[str]) -> str:
                                pref = strs[0]
                                pref_len = len(pref)

                                for s in strs[1:]:
                                    while pref != s[0:pref_len]:
                                        pref_len -= 1
                                        if pref_len == 0:
                                            return ""
                                        
                                        pref = pref[0:pref_len]
                                
                                return pref
                    `
                ,
                java:
                    `
                        class Solution {
                            public String longestCommonPrefix(String[] strs) {
                                if (strs == null || strs.length == 0) return "";
                                
                                String pref = strs[0];
                                int prefLen = pref.length();

                                for (int i = 1; i < strs.length; i++) {
                                    String s = strs[i];
                                    while (prefLen > s.length() || !pref.equals(s.substring(0, prefLen))) {
                                        prefLen--;
                                        if (prefLen == 0) {
                                            return "";
                                        }
                                        pref = pref.substring(0, prefLen);
                                    }
                                }

                                return pref;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 5,
        name: "Length of Last Word",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/length-of-last-word/",
        solution: {
            description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int lengthOfLastWord(string s) {
                                int end = s.length() - 1;

                                while (end >= 0 && s[end] == ' ') {
                                    end--;
                                }

                                int start = end;
                                while (start >= 0 && s[start] != ' ') {
                                    start--;
                                }

                                return end - start;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def lengthOfLastWord(self, s: str) -> int:                
                                end = len(s) - 1

                                while s[end] == " ":
                                    end -= 1
                                
                                start = end
                                while start >= 0 and s[start] != " ":
                                    start -= 1
                                
                                return end - start
                    `
                ,
                java:
                    `
                        class Solution {
                            public int lengthOfLastWord(String s) {
                                int end = s.length() - 1;

                                while (end >= 0 && s.charAt(end) == ' ') {
                                    end--;
                                }

                                int start = end;
                                while (start >= 0 && s.charAt(start) != ' ') {
                                    start--;
                                }

                                return end - start;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 6,
        name: "Simplify Path",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/simplify-path/",
        solution: {
            description: "You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path. Return the simplified canonical path.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            string simplifyPath(string path) {
                                vector<string> components;
                                stringstream ss(path);
                                string comp;
                                while (getline(ss, comp, '/')) {
                                    if (comp == "" || comp == ".") {
                                        continue;
                                    }

                                    if (comp == "..") {
                                        if (!st.empty()) {
                                            st.pop_back();
                                        }
                                    } else {
                                        st.push_back(comp);
                                    }
                                }

                                stringstream simplifiedPath;
                                for (const string& s : st) {
                                    simplifiedPath << "/" << s;
                                }

                                return simplifiedPath.str().empty() ? "/" : simplifiedPath.str();        
                            }

                        private:
                            vector<string> st;    
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def simplifyPath(self, path: str) -> str:
                                components = path.split("/")
                                st = []

                                for comp in components:
                                    if comp == "" or comp == ".":
                                        continue
                                    
                                    if comp == "..":
                                        if st:
                                            st.pop()
                                    else:
                                        st.append(comp)
                                
                                return "/" + "/".join(st)
                    `
                ,
                java:
                    `
                        class Solution {
                            public String simplifyPath(String path) {
                                String[] components = path.split("/");
                                Stack<String> st = new Stack<>();

                                for (String comp : components) {
                                    if (comp.equals("") || comp.equals(".")) {
                                        continue;
                                    }

                                    if (comp.equals("..")) {
                                        if (!st.isEmpty()) {
                                            st.pop();
                                        }
                                    } else {
                                        st.push(comp);
                                    }
                                }

                                StringBuilder sb = new StringBuilder();
                                while (!st.isEmpty()) {
                                    sb.insert(0, "/" + st.pop());
                                }

                                return sb.length() == 0 ? "/" : sb.toString();        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 7,
        name: "Word Search",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/word-search/",
        solution: {
            description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool exist(vector<vector<char>>& board, string word) {
                                int rows = board.size();
                                int cols = board[0].size();
                                unordered_set<string> visited;

                                auto dfs = [&](int r, int c, int k, auto& dfs) -> bool {
                                    if (k == word.length()) {
                                        return true;
                                    }

                                    if (r < 0 || r >= rows || c < 0 || c >= cols || visited.count(to_string(r) + "," + to_string(c)) || board[r][c] != word[k]) {
                                        return false;
                                    }

                                    visited.insert(to_string(r) + "," + to_string(c));
                                    bool res = dfs(r + 1, c, k + 1, dfs) || dfs(r - 1, c, k + 1, dfs) || dfs(r, c + 1, k + 1, dfs) || dfs(r, c - 1, k + 1, dfs);
                                    visited.erase(to_string(r) + "," + to_string(c));
                                    return res;
                                };

                                unordered_map<char, int> count;
                                for (char c : word) {
                                    count[c]++;
                                }

                                if (count[word[0]] > count[word.back()]) {
                                    reverse(word.begin(), word.end());
                                }

                                for (int r = 0; r < rows; r++) {
                                    for (int c = 0; c < cols; c++) {
                                        if (dfs(r, c, 0, dfs)) {
                                            return true;
                                        }
                                    }
                                }

                                return false;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def exist(self, board: List[List[str]], word: str) -> bool:
                            
                                rows, cols = len(board), len(board[0])
                                visited = set()

                                def dfs(r, c, k):
                                    if k == len(word):
                                        return True

                                    if not (0 <= r < rows) or not (0 <= c < cols) or (r,c) in visited or board[r][c] != word[k]:
                                        return False
                                    
                                    visited.add((r,c))
                                    res = dfs(r+1, c, k+1) or dfs(r-1, c, k+1) or dfs(r, c+1, k+1) or dfs(r, c-1, k+1)
                                    visited.remove((r,c))
                                    return res
                                    
                                count = {}
                                for c in word:
                                    count[c] = 1 + count.get(c, 0)
                                
                                if count[word[0]] > count[word[-1]]:
                                    word = word[::-1]
                                
                                for r in range(rows):
                                    for c in range(cols):
                                        if dfs(r, c, 0): return True
                                
                                return False
                    `
                ,
                java:
                    `
                        class Solution {
                            private int rows;
                            private int cols;
                            private Set<String> visited;

                            public boolean exist(char[][] board, String word) {
                                rows = board.length;
                                cols = board[0].length;
                                visited = new HashSet<>();

                                Map<Character, Integer> count = new HashMap<>();
                                for (char c : word.toCharArray()) {
                                    count.put(c, count.getOrDefault(c, 0) + 1);
                                }

                                if (count.getOrDefault(word.charAt(0), 0) > count.getOrDefault(word.charAt(word.length() - 1), 0)) {
                                    word = new StringBuilder(word).reverse().toString();
                                }

                                for (int r = 0; r < rows; r++) {
                                    for (int c = 0; c < cols; c++) {
                                        if (dfs(board, word, r, c, 0)) {
                                            return true;
                                        }
                                    }
                                }

                                return false;
                            }

                            private boolean dfs(char[][] board, String word, int r, int c, int k) {
                                if (k == word.length()) {
                                    return true;
                                }

                                if (r < 0 || r >= rows || c < 0 || c >= cols || visited.contains(r + "," + c) || board[r][c] != word.charAt(k)) {
                                    return false;
                                }

                                visited.add(r + "," + c);
                                boolean res = dfs(board, word, r + 1, c, k + 1) ||
                                            dfs(board, word, r - 1, c, k + 1) ||
                                            dfs(board, word, r, c + 1, k + 1) ||
                                            dfs(board, word, r, c - 1, k + 1);
                                visited.remove(r + "," + c);
                                return res;
                            }    
                        }
                    `
            },
        }
    },
    {
        id: 8,
        name: "Longest Substring Without Repeating Characters",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        solution: {
            description: "Given a string s, find the length of the longest substring without repeating characters.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int lengthOfLongestSubstring(string s) {
                                int maxLength = 0;
                                int left = 0;
                                unordered_map<char, int> lastSeen;

                                for (int right = 0; right < s.length(); right++) {
                                    char c = s[right];
                                    if (lastSeen.find(c) != lastSeen.end() && lastSeen[c] >= left) {
                                        left = lastSeen[c] + 1;
                                    }
                                    maxLength = max(maxLength, right - left + 1);
                                    lastSeen[c] = right;
                                }

                                return maxLength;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def lengthOfLongestSubstring(self, s: str) -> int:
                                max_length = 0
                                left = 0
                                last_seen = {}

                                for right, c in enumerate(s):
                                    if c in last_seen and last_seen[c] >= left:
                                        left = last_seen[c] + 1
                                    
                                    max_length = max(max_length, right - left + 1)
                                    last_seen[c] = right

                                return max_length
                    `
                ,
                java:
                    `
                        class Solution {
                            public int lengthOfLongestSubstring(String s) {
                                int maxLength = 0;
                                int left = 0;
                                Map<Character, Integer> lastSeen = new HashMap<>();

                                for (int right = 0; right < s.length(); right++) {
                                    char c = s.charAt(right);
                                    if (lastSeen.containsKey(c) && lastSeen.get(c) >= left) {
                                        left = lastSeen.get(c) + 1;
                                    }
                                    maxLength = Math.max(maxLength, right - left + 1);
                                    lastSeen.put(c, right);
                                }

                                return maxLength;       
                            }
                        }
                    `
            },
        }
    },
    {
        id: 9,
        name: "Zigzag Conversion",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/zigzag-conversion/",
        solution: {
            description: "Write the code that will take a string and make this conversion given a number of rows:",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            string convert(string s, int numRows) {
                                if (numRows == 1 || numRows >= s.length()) {
                                    return s;
                                }

                                int idx = 0, d = 1;
                                vector<vector<char>> rows(numRows);

                                for (char c : s) {
                                    rows[idx].push_back(c);
                                    if (idx == 0) {
                                        d = 1;
                                    } else if (idx == numRows - 1) {
                                        d = -1;
                                    }
                                    idx += d;
                                }

                                string result;
                                for (const auto& row : rows) {
                                    for (char c : row) {
                                        result += c;
                                    }
                                }

                                return result;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                        def convert(self, s: str, numRows: int) -> str:
                            if numRows == 1 or numRows >= len(s):
                                return s

                            idx, d = 0, 1
                            rows = [[] for _ in range(numRows)]

                            for char in s:
                                rows[idx].append(char)
                                if idx == 0:
                                    d = 1
                                elif idx == numRows - 1:
                                    d = -1
                                idx += d

                            for i in range(numRows):
                                rows[i] = ''.join(rows[i])

                            return ''.join(rows)   
                    `
                ,
                java:
                    `
                        class Solution {
                            public String convert(String s, int numRows) {
                            if (numRows == 1 || numRows >= s.length()) {
                                    return s;
                                }

                                int idx = 0, d = 1;
                                List<Character>[] rows = new ArrayList[numRows];
                                for (int i = 0; i < numRows; i++) {
                                    rows[i] = new ArrayList<>();
                                }

                                for (char c : s.toCharArray()) {
                                    rows[idx].add(c);
                                    if (idx == 0) {
                                        d = 1;
                                    } else if (idx == numRows - 1) {
                                        d = -1;
                                    }
                                    idx += d;
                                }

                                StringBuilder result = new StringBuilder();
                                for (List<Character> row : rows) {
                                    for (char c : row) {
                                        result.append(c);
                                    }
                                }

                                return result.toString();        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 10,
        name: "Generate Parentheses",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/generate-parentheses/",
        solution: {
            description: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            vector<string> generateParenthesis(int n) {
                                vector<string> res;
                                dfs(0, 0, "", n, res);
                                return res;        
                            }

                        private:
                            void dfs(int openP, int closeP, string s, int n, vector<string>& res) {
                                if (openP == closeP && openP + closeP == n * 2) {
                                    res.push_back(s);
                                    return;
                                }

                                if (openP < n) {
                                    dfs(openP + 1, closeP, s + "(", n, res);
                                }

                                if (closeP < openP) {
                                    dfs(openP, closeP + 1, s + ")", n, res);
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def generateParenthesis(self, n: int) -> List[str]:
                                res = []

                                def dfs(openP, closeP, s):
                                    if openP == closeP and openP + closeP == n * 2:
                                        res.append(s)
                                        return
                                    
                                    if openP < n:
                                        dfs(openP + 1, closeP, s + "(")
                                    
                                    if closeP < openP:
                                        dfs(openP, closeP + 1, s + ")")

                                dfs(0, 0, "")

                                return res
                    `
                ,
                java:
                    `
                        class Solution {
                            public List<String> generateParenthesis(int n) {
                                List<String> res = new ArrayList<>();

                                dfs(0, 0, "", n, res);

                                return res;        
                            }

                            private void dfs(int openP, int closeP, String s, int n, List<String> res) {
                                if (openP == closeP && openP + closeP == n * 2) {
                                    res.add(s);
                                    return;
                                }

                                if (openP < n) {
                                    dfs(openP + 1, closeP, s + "(", n, res);
                                }

                                if (closeP < openP) {
                                    dfs(openP, closeP + 1, s + ")", n, res);
                                }
                            }    
                        }
                    `
            },
        }
    },
    {
        id: 11,
        name: "Palindrome Partitioning",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/palindrome-partitioning/",
        solution: {
            description: "Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            vector<string> generateParenthesis(int n) {
                                vector<string> res;
                                dfs(0, 0, "", n, res);
                                return res;        
                            }

                        private:
                            void dfs(int openP, int closeP, string s, int n, vector<string>& res) {
                                if (openP == closeP && openP + closeP == n * 2) {
                                    res.push_back(s);
                                    return;
                                }

                                if (openP < n) {
                                    dfs(openP + 1, closeP, s + "(", n, res);
                                }

                                if (closeP < openP) {
                                    dfs(openP, closeP + 1, s + ")", n, res);
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def generateParenthesis(self, n: int) -> List[str]:
                                res = []

                                def dfs(openP, closeP, s):
                                    if openP == closeP and openP + closeP == n * 2:
                                        res.append(s)
                                        return
                                    
                                    if openP < n:
                                        dfs(openP + 1, closeP, s + "(")
                                    
                                    if closeP < openP:
                                        dfs(openP, closeP + 1, s + ")")

                                dfs(0, 0, "")

                                return res
                    `
                ,
                java:
                    `
                        class Solution {
                            public List<String> generateParenthesis(int n) {
                                List<String> res = new ArrayList<>();

                                dfs(0, 0, "", n, res);

                                return res;        
                            }

                            private void dfs(int openP, int closeP, String s, int n, List<String> res) {
                                if (openP == closeP && openP + closeP == n * 2) {
                                    res.add(s);
                                    return;
                                }

                                if (openP < n) {
                                    dfs(openP + 1, closeP, s + "(", n, res);
                                }

                                if (closeP < openP) {
                                    dfs(openP, closeP + 1, s + ")", n, res);
                                }
                            }    
                        }
                    `
            },
        }
    },
    {
        id: 12,
        name: "Word Break",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/word-break/",
        solution: {
            description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool wordBreak(string s, vector<string>& wordDict) {
                                vector<bool> dp(s.size() + 1, false);
                                dp[0] = true;

                                for (int i = 1; i <= s.size(); i++) {
                                    for (const string& w : wordDict) {
                                        int start = i - w.length();
                                        if (start >= 0 && dp[start] && s.substr(start, w.length()) == w) {
                                            dp[i] = true;
                                            break;
                                        }
                                    }
                                }
                                return dp[s.size()];        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def wordBreak(self, s: str, wordDict: List[str]) -> bool:
                                dp = [True] + [False] * len(s)

                                for i in range(1, len(s) + 1):
                                    for w in wordDict:
                                        start = i - len(w)
                                        if start >= 0 and dp[start] and s[start:i] == w:
                                            dp[i] = True
                                            break
                                
                                return dp[-1]
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean wordBreak(String s, List<String> wordDict) {
                                boolean[] dp = new boolean[s.length() + 1];
                                dp[0] = true;

                                for (int i = 1; i <= s.length(); i++) {
                                    for (String w : wordDict) {
                                        int start = i - w.length();
                                        if (start >= 0 && dp[start] && s.substring(start, i).equals(w)) {
                                            dp[i] = true;
                                            break;
                                        }
                                    }
                                }
                                return dp[s.length()];        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 13,
        name: "Regular Expression Matching",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/regular-expression-matching/",
        solution: {
            description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: '.' Matches any single character  & '*' Matches zero or more of the preceding element. The matching should cover the entire input string (not partial)..",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool isMatch(string s, string p) {
                                int n = s.length(), m = p.length();
                                bool dp[n+1][m+1];
                                memset(dp, false, sizeof(dp));
                                dp[0][0] = true;
                                
                                for(int i=0; i<=n; i++){
                                    for(int j=1; j<=m; j++){
                                        if(p[j-1] == '*'){
                                            dp[i][j] = dp[i][j-2] || (i > 0 && (s[i-1] == p[j-2] || p[j-2] == '.') && dp[i-1][j]);
                                        }
                                        else{
                                            dp[i][j] = i > 0 && dp[i-1][j-1] && (s[i-1] == p[j-1] || p[j-1] == '.');
                                        }
                                    }
                                }
                                
                                return dp[n][m];
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def isMatch(self, s: str, p: str) -> bool:
                                i, j = len(s) - 1, len(p) - 1
                                return self.backtrack({}, s, p, i, j)

                            def backtrack(self, cache, s, p, i, j):
                                key = (i, j)
                                if key in cache:
                                    return cache[key]

                                if i == -1 and j == -1:
                                    cache[key] = True
                                    return True

                                if i != -1 and j == -1:
                                    cache[key] = False
                                    return cache[key]

                                if i == -1 and p[j] == '*':
                                    k = j
                                    while k != -1 and p[k] == '*':
                                        k -= 2
                                    
                                    if k == -1:
                                        cache[key] = True
                                        return cache[key]
                                    
                                    cache[key] = False
                                    return cache[key]
                                
                                if i == -1 and p[j] != '*':
                                    cache[key] = False
                                    return cache[key]

                                if p[j] == '*':
                                    if self.backtrack(cache, s, p, i, j - 2):
                                        cache[key] = True
                                        return cache[key]
                                    
                                    if p[j - 1] == s[i] or p[j - 1] == '.':
                                        if self.backtrack(cache, s, p, i - 1, j):
                                            cache[key] = True
                                            return cache[key]
                                
                                if p[j] == '.' or s[i] == p[j]:
                                    if self.backtrack(cache, s, p, i - 1, j - 1):
                                        cache[key] = True
                                        return cache[key]

                                cache[key] = False
                                return cache[key]
                    `
                ,
                java:
                    `
                        enum Result {
                            TRUE, FALSE
                        }

                        class Solution {
                            Result[][] memo;

                            public boolean isMatch(String text, String pattern) {
                                memo = new Result[text.length() + 1][pattern.length() + 1];
                                return dp(0, 0, text, pattern);
                            }

                            public boolean dp(int i, int j, String text, String pattern) {
                                if (memo[i][j] != null) {
                                    return memo[i][j] == Result.TRUE;
                                }
                                boolean ans;
                                if (j == pattern.length()){
                                    ans = i == text.length();
                                } else{
                                    boolean first_match = (i < text.length() &&
                                                        (pattern.charAt(j) == text.charAt(i) ||
                                                            pattern.charAt(j) == '.'));

                                    if (j + 1 < pattern.length() && pattern.charAt(j+1) == '*'){
                                        ans = (dp(i, j+2, text, pattern) ||
                                            first_match && dp(i+1, j, text, pattern));
                                    } else {
                                        ans = first_match && dp(i+1, j+1, text, pattern);
                                    }
                                }
                                memo[i][j] = ans ? Result.TRUE : Result.FALSE;
                                return ans;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 14,
        name: "Longest Valid Parentheses",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/longest-valid-parentheses/description/",
        solution: {
            description: "Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int longestValidParentheses(string s) {
                                stack<int> st;
                                st.push(-1);
                                int max_len = 0;

                                for (int i = 0; i < s.length(); i++) {
                                    if (s[i] == '(') {
                                        st.push(i);
                                    } else {
                                        st.pop();
                                        if (st.empty()) {
                                            st.push(i);
                                        } else {
                                            max_len = max(max_len, i - st.top());
                                        }
                                    }
                                }

                                return max_len;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def longestValidParentheses(self, s: str) -> int:
                                stack = [-1]
                                max_len = 0

                                for i in range(len(s)):
                                    if s[i] == "(":
                                        stack.append(i)
                                    else:
                                        stack.pop()
                                        if len(stack) == 0:
                                            stack.append(i)
                                        else:
                                            max_len = max(max_len, i - stack[-1])
                                
                                return max_len
                    `
                ,
                java:
                    `
                        class Solution {
                            public int longestValidParentheses(String s) {
                                Stack<Integer> stack = new Stack<>();
                                stack.push(-1);
                                int max_len = 0;

                                for (int i = 0; i < s.length(); i++) {
                                    if (s.charAt(i) == '(') {
                                        stack.push(i);
                                    } else {
                                        stack.pop();
                                        if (stack.isEmpty()) {
                                            stack.push(i);
                                        } else {
                                            max_len = Math.max(max_len, i - stack.peek());
                                        }
                                    }
                                }

                                return max_len;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 15,
        name: "Scramble String",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/scramble-string/",
        solution: {
            description: "Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.",
            code:{
                cpp: 
                    `

                        class Solution {
                        public:
                            unordered_map<string, bool> memo;

                            bool solve(string s1, string s2) {
                                string key = s1 + " " + s2;
                                if (s1 == s2) return memo[key] = true;
                                if (s1.size() <= 1 || s2.size() <= 1) return false;
                                if (memo.find(key) != memo.end()) return memo[key];

                                int n = s2.size();
                                bool isScrambled = false;
                                for (int i = 1; i < s1.size(); i++) {
                                    bool cond1 = solve(s1.substr(0, i), s2.substr(n - i)) && solve(s1.substr(i), s2.substr(0, n - i));
                                    bool cond2 = solve(s1.substr(0, i), s2.substr(0, i)) && solve(s1.substr(i), s2.substr(i));
                                    if (cond1 || cond2) {
                                        isScrambled = true;
                                        break;
                                    }
                                }
                                return memo[key] = isScrambled;
                            }

                            bool isScramble(string s1, string s2) {
                                vector<int> freq(26, 0);
                                for (int i = 0; i < s1.size(); i++) {
                                    freq[s1[i] - 'a']++;
                                    freq[s2[i] - 'a']--;
                                }
                                for (int count : freq) {
                                    if (count != 0) return false;
                                }
                                return solve(s1, s2);
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def __init__(self):
                                self.memo = {}

                            def solve(self, s1: str, s2: str) -> bool:
                                key = f"{s1} {s2}"
                                if s1 == s2:
                                    self.memo[key] = True
                                    return True
                                if len(s1) <= 1 or len(s2) <= 1:
                                    return False
                                if key in self.memo:
                                    return self.memo[key]

                                n = len(s2)
                                is_scrambled = False
                                for i in range(1, len(s1)):
                                    cond1 = self.solve(s1[:i], s2[-i:]) and self.solve(s1[i:], s2[:-i])
                                    cond2 = self.solve(s1[:i], s2[:i]) and self.solve(s1[i:], s2[i:])
                                    if cond1 or cond2:
                                        is_scrambled = True
                                        break

                                self.memo[key] = is_scrambled
                                return is_scrambled

                            def isScramble(self, s1: str, s2: str) -> bool:
                                freq = [0] * 26
                                for c1, c2 in zip(s1, s2):
                                    freq[ord(c1) - ord('a')] += 1
                                    freq[ord(c2) - ord('a')] -= 1
                                if any(count != 0 for count in freq):
                                    return False
                                return self.solve(s1, s2)
                    `
                ,
                java:
                    `
                        class Solution {
                            private Map<String, Boolean> memo = new HashMap<>();

                            private boolean solve(String s1, String s2) {
                                String key = s1 + " " + s2;
                                if (s1.equals(s2)) {
                                    memo.put(key, true);
                                    return true;
                                }
                                if (s1.length() <= 1 || s2.length() <= 1) return false;
                                if (memo.containsKey(key)) return memo.get(key);

                                int n = s2.length();
                                boolean isScrambled = false;
                                for (int i = 1; i < s1.length(); i++) {
                                    boolean cond1 = solve(s1.substring(0, i), s2.substring(n - i)) && solve(s1.substring(i), s2.substring(0, n - i));
                                    boolean cond2 = solve(s1.substring(0, i), s2.substring(0, i)) && solve(s1.substring(i), s2.substring(i));
                                    if (cond1 || cond2) {
                                        isScrambled = true;
                                        break;
                                    }
                                }

                                memo.put(key, isScrambled);
                                return isScrambled;
                            }

                            public boolean isScramble(String s1, String s2) {
                                int[] freq = new int[26];
                                for (int i = 0; i < s1.length(); i++) {
                                    freq[s1.charAt(i) - 'a']++;
                                    freq[s2.charAt(i) - 'a']--;
                                }
                                for (int count : freq) {
                                    if (count != 0) return false;
                                }
                                return solve(s1, s2);
                            }
                        }
                    `
            },
        }
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
        url: "https://leetcode.com/problems/transpose-matrix/",
        solution: {
            description: "Given a 2D integer array matrix, return the transpose of matrix.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            vector<vector<int>> transpose(vector<vector<int>>& matrix) {
                                vector<vector<int>> res;

                                for (size_t c = 0; c < matrix[0].size(); c++) {
                                    vector<int> temp;

                                    for (size_t r = 0; r < matrix.size(); r++) {
                                        temp.push_back(matrix[r][c]);
                                    }

                                    res.push_back(temp);
                                }

                                return res;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
                                res = []

                                for c in range(len(matrix[0])):
                                    temp = []

                                    for r in range(len(matrix)):
                                        temp.append(matrix[r][c])

                                    res.append(temp)

                                return res
                    `
                ,
                java:
                    `
                        class Solution {
                            public int[][] transpose(int[][] matrix) {
                                List<List<Integer>> resList = new ArrayList<>();

                                for (int c = 0; c < matrix[0].length; c++) {
                                    List<Integer> temp = new ArrayList<>();

                                    for (int r = 0; r < matrix.length; r++) {
                                        temp.add(matrix[r][c]);
                                    }

                                    resList.add(temp);
                                }

                                // Convert List<List<Integer>> to int[][]
                                int[][] res = new int[resList.size()][];
                                for (int i = 0; i < resList.size(); i++) {
                                    List<Integer> row = resList.get(i);
                                    res[i] = row.stream().mapToInt(Integer::intValue).toArray();
                                }

                                return res;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 2,
        name: "Rotate by 90 Degree",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/rotate-by-90-degree-1587115621/1",
        solution: {
            description: "Given a square matrix mat[][] of size n x n. The task is to rotate it by 90 degrees in an anti-clockwise direction without using any extra space. ",
            code:{
                cpp: 
                    `
                    class Solution {
                    public:
                        void rotateby90(vector<vector<int>>& mat) {
                            int n = mat.size();
                            for (int i = 0; i < n; i++) reverse(mat[i].begin(), mat[i].end());

                            for (int i = 0; i < n; i++) {
                                for (int j = i+1; j < n; j++) swap(mat[i][j], mat[j][i]);
                            }
                        }
                    };
                    `
                ,
                python:
                    `
                        class Solution:
                            def rotateby90(self, mat):
                                n = len(mat)
                                
                                for i in range(n):
                                    mat[i].reverse()
                                    
                                for i in range(n):
                                    for j in range(i + 1, n):
                                        mat[i][j], mat[j][i] = mat[j][i], mat[i][j]
                    `
                ,
                java:
                    `
                        class Solution {
                            public void rotateby90(int[][] mat) {
                                int n = mat.length;
                                // Reverse each row
                                for (int i = 0; i < n; i++) {
                                    int left = 0, right = n - 1;
                                    while (left < right) {
                                        int temp = mat[i][left];
                                        mat[i][left] = mat[i][right];
                                        mat[i][right] = temp;
                                        left++;
                                        right--;
                                    }
                                }
                                
                                for (int i = 0; i < n; i++) {
                                    for (int j = i + 1; j < n; j++) {
                                        int temp = mat[i][j];
                                        mat[i][j] = mat[j][i];
                                        mat[j][i] = temp;
                                    }
                                }
                            }
                        }
                    `
            },
        }
    },
    {
        id: 3,
        name: "Search in a Row-Column sorted matrix",
        img: share,
        level: "Easy",
        url: "https://www.geeksforgeeks.org/problems/search-in-a-matrix17201720/1",
        solution: {
            description: "Given a 2D integer matrix mat[][] of size n x m, where every row and column is sorted in increasing order and a number x, the task is to find whether element x is present in the matrix.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool matSearch(vector<vector<int>> &mat, int x) {
                                int n = mat.size(), m = mat[0].size();
                                int i = 0, j = m - 1;
                            
                                while(i < n && j >= 0) {
                                    if(x > mat[i][j]) i++;
                                    else if(x < mat[i][j]) j--;
                                    else return true;
                                }
                                return false;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                        def matSearch(self, mat, x):
                            n = len(mat)
                            m = len(mat[0])
                            i, j = 0, m - 1
                            
                            while i < n and j >= 0:
                                if x > mat[i][j]:
                                    i += 1
                                elif x < mat[i][j]:
                                    j -= 1
                                else:
                                    return True
                            return False
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean matSearch(int[][] mat, int x) {
                                int n = mat.length;
                                int m = mat[0].length;
                                int i = 0, j = m - 1;
                                
                                while (i < n && j >= 0) {
                                    if (x > mat[i][j]) {
                                        i++;
                                    } else if (x < mat[i][j]) {
                                        j--;
                                    } else {
                                        return true;
                                    }
                                }
                                return false;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 4,
        name: "Valid Sudoku",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/valid-sudoku/",
        solution: {
            description: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules: 1. Each row must contain the digits 1-9 without repetition. 2. Each column must contain the digits 1-9 without repetition. 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool isValidSudoku(vector<vector<char>>& board) {
                                unordered_set<char> rows[9];
                                unordered_set<char> cols[9];
                                unordered_set<char> boxes[9];

                                for (int r = 0; r < 9; ++r) {
                                    for (int c = 0; c < 9; ++c) {
                                        if (board[r][c] == '.') {
                                            continue;
                                        }

                                        char value = board[r][c];
                                        int boxIndex = (r / 3) * 3 + (c / 3);

                                        if (rows[r].count(value) || cols[c].count(value) || boxes[boxIndex].count(value)) {
                                            return false;
                                        }

                                        rows[r].insert(value);
                                        cols[c].insert(value);
                                        boxes[boxIndex].insert(value);
                                    }
                                }

                                return true;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def isValidSudoku(self, board: List[List[str]]) -> bool:
                                rows = defaultdict(set)
                                cols = defaultdict(set)
                                boxes = defaultdict(set)
                                
                                for r in range(9):
                                    for c in range(9):
                                        if board[r][c] == ".":
                                            continue
                                        
                                        if board[r][c] in rows[r] or board[r][c] in cols[c] or board[r][c] in boxes[(r // 3, c // 3)]:
                                            return False
                                        
                                        rows[r].add(board[r][c])
                                        cols[c].add(board[r][c])
                                        boxes[(r // 3, c // 3)].add(board[r][c])
                                
                                return True
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean isValidSudoku(char[][] board) {
                                HashSet<Character>[] rows = new HashSet[9];
                                HashSet<Character>[] cols = new HashSet[9];
                                HashSet<Character>[] boxes = new HashSet[9];

                                for (int i = 0; i < 9; i++) {
                                    rows[i] = new HashSet<>();
                                    cols[i] = new HashSet<>();
                                    boxes[i] = new HashSet<>();
                                }

                                for (int r = 0; r < 9; r++) {
                                    for (int c = 0; c < 9; c++) {
                                        if (board[r][c] == '.') {
                                            continue;
                                        }

                                        char value = board[r][c];
                                        int boxIndex = (r / 3) * 3 + (c / 3);

                                        if (rows[r].contains(value) || cols[c].contains(value) || boxes[boxIndex].contains(value)) {
                                            return false;
                                        }

                                        rows[r].add(value);
                                        cols[c].add(value);
                                        boxes[boxIndex].add(value);
                                    }
                                }

                                return true;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 5,
        name: "Word Search",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/word-search/",
        solution: {
            description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool exist(vector<vector<char>>& board, string word) {
                                int rows = board.size();
                                int cols = board[0].size();
                                unordered_set<string> visited;

                                auto dfs = [&](int r, int c, int k, auto& dfs) -> bool {
                                    if (k == word.length()) {
                                        return true;
                                    }

                                    if (r < 0 || r >= rows || c < 0 || c >= cols || visited.count(to_string(r) + "," + to_string(c)) || board[r][c] != word[k]) {
                                        return false;
                                    }

                                    visited.insert(to_string(r) + "," + to_string(c));
                                    bool res = dfs(r + 1, c, k + 1, dfs) || dfs(r - 1, c, k + 1, dfs) || dfs(r, c + 1, k + 1, dfs) || dfs(r, c - 1, k + 1, dfs);
                                    visited.erase(to_string(r) + "," + to_string(c));
                                    return res;
                                };

                                unordered_map<char, int> count;
                                for (char c : word) {
                                    count[c]++;
                                }

                                if (count[word[0]] > count[word.back()]) {
                                    reverse(word.begin(), word.end());
                                }

                                for (int r = 0; r < rows; r++) {
                                    for (int c = 0; c < cols; c++) {
                                        if (dfs(r, c, 0, dfs)) {
                                            return true;
                                        }
                                    }
                                }

                                return false;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def exist(self, board: List[List[str]], word: str) -> bool:
                            
                                rows, cols = len(board), len(board[0])
                                visited = set()

                                def dfs(r, c, k):
                                    if k == len(word):
                                        return True

                                    if not (0 <= r < rows) or not (0 <= c < cols) or (r,c) in visited or board[r][c] != word[k]:
                                        return False
                                    
                                    visited.add((r,c))
                                    res = dfs(r+1, c, k+1) or dfs(r-1, c, k+1) or dfs(r, c+1, k+1) or dfs(r, c-1, k+1)
                                    visited.remove((r,c))
                                    return res
                                    
                                count = {}
                                for c in word:
                                    count[c] = 1 + count.get(c, 0)
                                
                                if count[word[0]] > count[word[-1]]:
                                    word = word[::-1]
                                
                                for r in range(rows):
                                    for c in range(cols):
                                        if dfs(r, c, 0): return True
                                
                                return False
                    `
                ,
                java:
                    `
                        class Solution {
                            private int rows;
                            private int cols;
                            private Set<String> visited;

                            public boolean exist(char[][] board, String word) {
                                rows = board.length;
                                cols = board[0].length;
                                visited = new HashSet<>();

                                Map<Character, Integer> count = new HashMap<>();
                                for (char c : word.toCharArray()) {
                                    count.put(c, count.getOrDefault(c, 0) + 1);
                                }

                                if (count.getOrDefault(word.charAt(0), 0) > count.getOrDefault(word.charAt(word.length() - 1), 0)) {
                                    word = new StringBuilder(word).reverse().toString();
                                }

                                for (int r = 0; r < rows; r++) {
                                    for (int c = 0; c < cols; c++) {
                                        if (dfs(board, word, r, c, 0)) {
                                            return true;
                                        }
                                    }
                                }

                                return false;
                            }

                            private boolean dfs(char[][] board, String word, int r, int c, int k) {
                                if (k == word.length()) {
                                    return true;
                                }

                                if (r < 0 || r >= rows || c < 0 || c >= cols || visited.contains(r + "," + c) || board[r][c] != word.charAt(k)) {
                                    return false;
                                }

                                visited.add(r + "," + c);
                                boolean res = dfs(board, word, r + 1, c, k + 1) ||
                                            dfs(board, word, r - 1, c, k + 1) ||
                                            dfs(board, word, r, c + 1, k + 1) ||
                                            dfs(board, word, r, c - 1, k + 1);
                                visited.remove(r + "," + c);
                                return res;
                            }    
                        }
                    `
            },
        }
    },
    {
        id: 6,
        name: "Number of Islands",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/number-of-islands/",
        solution: {
            description: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int numIslands(vector<vector<char>>& grid) {
                                int islands = 0;
                                int rows = grid.size();
                                int cols = grid[0].size();
                                unordered_set<string> visited;

                                vector<pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

                                for (int r = 0; r < rows; r++) {
                                    for (int c = 0; c < cols; c++) {
                                        if (grid[r][c] == '1' && visited.find(to_string(r) + "," + to_string(c)) == visited.end()) {
                                            islands++;
                                            bfs(grid, r, c, visited, directions, rows, cols);
                                        }
                                    }
                                }

                                return islands;        
                            }

                        private:
                            void bfs(vector<vector<char>>& grid, int r, int c, unordered_set<string>& visited, vector<pair<int, int>>& directions, int rows, int cols) {
                                queue<pair<int, int>> q;
                                visited.insert(to_string(r) + "," + to_string(c));
                                q.push({r, c});

                                while (!q.empty()) {
                                    auto [row, col] = q.front();
                                    q.pop();

                                    for (auto [dr, dc] : directions) {
                                        int nr = row + dr;
                                        int nc = col + dc;
                                        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == '1' && visited.find(to_string(nr) + "," + to_string(nc)) == visited.end()) {
                                            q.push({nr, nc});
                                            visited.insert(to_string(nr) + "," + to_string(nc));
                                        }
                                    }
                                }
                            }
                        };    
                    `
                ,
                python:
                    `
                        class Solution:
                            def numIslands(self, grid: List[List[str]]) -> int:
                                islands = 0
                                visited = set()
                                rows, cols = len(grid), len(grid[0])

                                def bfs(r, c):
                                    q = deque()
                                    visited.add((r, c))
                                    q.append((r, c))

                                    while q:
                                        row, col = q.popleft()
                                        directions = [[1,0],[-1,0],[0,1],[0,-1]]

                                        for dr, dc in directions:
                                            r, c = row + dr, col + dc
                                            if 0 <= r < rows and 0 <= c < cols and grid[r][c] == "1" and (r, c) not in visited:
                                                q.append((r, c))
                                                visited.add((r, c))

                                for r in range(rows):
                                    for c in range(cols):
                                        if grid[r][c] == "1" and (r, c) not in visited:
                                            islands += 1
                                            bfs(r, c)

                                return islands
                    `
                ,
                java:
                    `
                        class Solution {
                            public int numIslands(char[][] grid) {
                                int islands = 0;
                                int rows = grid.length;
                                int cols = grid[0].length;
                                Set<String> visited = new HashSet<>();

                                int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

                                for (int r = 0; r < rows; r++) {
                                    for (int c = 0; c < cols; c++) {
                                        if (grid[r][c] == '1' && !visited.contains(r + "," + c)) {
                                            islands++;
                                            bfs(grid, r, c, visited, directions, rows, cols);
                                        }
                                    }
                                }

                                return islands;        
                            }

                            private void bfs(char[][] grid, int r, int c, Set<String> visited, int[][] directions, int rows, int cols) {
                                Queue<int[]> q = new LinkedList<>();
                                visited.add(r + "," + c);
                                q.add(new int[]{r, c});

                                while (!q.isEmpty()) {
                                    int[] point = q.poll();
                                    int row = point[0], col = point[1];

                                    for (int[] direction : directions) {
                                        int nr = row + direction[0], nc = col + direction[1];
                                        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == '1' && !visited.contains(nr + "," + nc)) {
                                            q.add(new int[]{nr, nc});
                                            visited.add(nr + "," + nc);
                                        }
                                    }
                                }
                            }    
                        }
                    `
            },
        }
    },
    {
        id: 7,
        name: "Maximal Square",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/maximal-square/",
        solution: {
            description: "Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int maximalSquare(vector<vector<char>>& matrix) {
                                if (matrix.empty() || matrix[0].empty()) {
                                    return 0;
                                }

                                int rows = matrix.size();
                                int cols = matrix[0].size();
                                vector<vector<int>> dp(rows + 1, vector<int>(cols + 1, 0));
                                int max_side = 0;

                                for (int r = 0; r < rows; r++) {
                                    for (int c = 0; c < cols; c++) {
                                        if (matrix[r][c] == '1') {
                                            dp[r + 1][c + 1] = min({dp[r][c], dp[r + 1][c], dp[r][c + 1]}) + 1;
                                            max_side = max(max_side, dp[r + 1][c + 1]);
                                        }
                                    }
                                }

                                return max_side * max_side;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def maximalSquare(self, matrix: List[List[str]]) -> int:
                                if matrix is None or len(matrix) < 1:
                                    return 0
                                
                                rows = len(matrix)
                                cols = len(matrix[0])
                                
                                dp = [[0]*(cols+1) for _ in range(rows+1)]
                                max_side = 0
                                
                                for r in range(rows):
                                    for c in range(cols):
                                        if matrix[r][c] == '1':
                                            dp[r+1][c+1] = min(dp[r][c], dp[r+1][c], dp[r][c+1]) + 1 # Be careful of the indexing since dp grid has additional row and column
                                            max_side = max(max_side, dp[r+1][c+1])
                                        
                                return max_side * max_side
                    `
                ,
                java:
                    `
                        class Solution {
                            public int maximalSquare(char[][] matrix) {
                                if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
                                    return 0;
                                }

                                int rows = matrix.length;
                                int cols = matrix[0].length;
                                int[][] dp = new int[rows + 1][cols + 1];
                                int maxSide = 0;

                                for (int r = 0; r < rows; r++) {
                                    for (int c = 0; c < cols; c++) {
                                        if (matrix[r][c] == '1') {
                                            dp[r + 1][c + 1] = Math.min(Math.min(dp[r][c], dp[r + 1][c]), dp[r][c + 1]) + 1;
                                            maxSide = Math.max(maxSide, dp[r + 1][c + 1]);
                                        }
                                    }
                                }

                                return maxSide * maxSide;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 8,
        name: "Game of Life",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/game-of-life/",
        solution: {
            description: "Given the current state of the board, update the board to reflect its next state.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int cnt(vector<vector<int>>& board,int i,int j,int n ,int m){
                                int count=0;
                                int dirRow[8] ={-1, -1, -1, 0, +1, +1, +1, 0};
                                int dirCol[8] ={-1, 0, +1, +1, +1, 0, -1, -1};
                                for(int k=0;k<8;k++){
                                    int nx=i+dirRow[k];
                                    int ny=j+dirCol[k];
                                    if(nx<0 || nx>=n || ny<0 || ny>=m) continue;
                                    if((board[nx][ny]%2)==1) count++; // %2 for getting the original cell value .
                                }
                                return count;
                            }
                            void gameOfLife(vector<vector<int>>& board) {
                                int n=board.size(); 
                                int m=board[0].size();
                                for(int i=0;i<n;i++){
                                    for(int j=0;j<m;j++){
                                        int live=cnt(board,i,j,n,m);
                                        if(board[i][j]==0 && live==3){
                                            board[i][j]=2; // means alive
                                        }else if(board[i][j]==1){
                                            if(live<2){
                                                board[i][j]=3; // 3 means dead
                                            }else if(live==2 || live==3){
                                                board[i][j]=1;
                                            }else if(live>3){
                                                board[i][j]=3;
                                            }
                                        }

                                    }
                                }

                                for(int i=0;i<n;i++){
                                    for(int j=0;j<m;j++){
                                        if(board[i][j]==3){
                                            board[i][j]=0;
                                        }else if(board[i][j]==2){
                                            board[i][j]=1;
                                        }
                                    }
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def cnt(self, board, i, j, n, m):
                                count = 0
                                dirRow = [-1, -1, -1, 0, +1, +1, +1, 0]
                                dirCol = [-1, 0, +1, +1, +1, 0, -1, -1]
                                for k in range(8):
                                    nx, ny = i + dirRow[k], j + dirCol[k]
                                    if nx < 0 or nx >= n or ny < 0 or ny >= m:
                                        continue
                                    if board[nx][ny] % 2 == 1:  # %2 to get the original cell value
                                        count += 1
                                return count

                            def gameOfLife(self, board):
                                n, m = len(board), len(board[0])
                                for i in range(n):
                                    for j in range(m):
                                        live = self.cnt(board, i, j, n, m)
                                        if board[i][j] == 0 and live == 3:
                                            board[i][j] = 2  # 2 means alive
                                        elif board[i][j] == 1:
                                            if live < 2:
                                                board[i][j] = 3  # 3 means dead
                                            elif live == 2 or live == 3:
                                                board[i][j] = 1
                                            elif live > 3:
                                                board[i][j] = 3

                                for i in range(n):
                                    for j in range(m):
                                        if board[i][j] == 3:
                                            board[i][j] = 0
                                        elif board[i][j] == 2:
                                            board[i][j] = 1
                    `
                ,
                java:
                    `
                        class Solution {
                            private int cnt(int[][] board, int i, int j, int n, int m) {
                                int count = 0;
                                int[] dirRow = {-1, -1, -1, 0, +1, +1, +1, 0};
                                int[] dirCol = {-1, 0, +1, +1, +1, 0, -1, -1};
                                for (int k = 0; k < 8; k++) {
                                    int nx = i + dirRow[k];
                                    int ny = j + dirCol[k];
                                    if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                                        continue;
                                    }
                                    if (board[nx][ny] % 2 == 1) { // %2 to get the original cell value
                                        count++;
                                    }
                                }
                                return count;
                            }

                            public void gameOfLife(int[][] board) {
                                int n = board.length;
                                int m = board[0].length;
                                for (int i = 0; i < n; i++) {
                                    for (int j = 0; j < m; j++) {
                                        int live = cnt(board, i, j, n, m);
                                        if (board[i][j] == 0 && live == 3) {
                                            board[i][j] = 2; // 2 means alive
                                        } else if (board[i][j] == 1) {
                                            if (live < 2) {
                                                board[i][j] = 3; // 3 means dead
                                            } else if (live == 2 || live == 3) {
                                                board[i][j] = 1;
                                            } else if (live > 3) {
                                                board[i][j] = 3;
                                            }
                                        }
                                    }
                                }

                                for (int i = 0; i < n; i++) {
                                    for (int j = 0; j < m; j++) {
                                        if (board[i][j] == 3) {
                                            board[i][j] = 0;
                                        } else if (board[i][j] == 2) {
                                            board[i][j] = 1;
                                        }
                                    }
                                }
                            }
                        }
                    `
            },
        }
    },
    {
        id: 9,
        name: "Set Matrix Zeroes",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/set-matrix-zeroes/",
        solution: {
            description: "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void setZeroes(vector<vector<int>>& matrix) {
                                int rows = matrix.size();
                                int cols = matrix[0].size();

                                bool firstRowHasZero = false;
                                bool firstColHasZero = false;

                                // Check if the first row contains zero
                                for (int c = 0; c < cols; c++) {
                                    if (matrix[0][c] == 0) {
                                        firstRowHasZero = true;
                                        break;
                                    }
                                }

                                // Check if the first column contains zero
                                for (int r = 0; r < rows; r++) {
                                    if (matrix[r][0] == 0) {
                                        firstColHasZero = true;
                                        break;
                                    }
                                }

                                // Use the first row and column as markers
                                for (int r = 1; r < rows; r++) {
                                    for (int c = 1; c < cols; c++) {
                                        if (matrix[r][c] == 0) {
                                            matrix[r][0] = 0;
                                            matrix[0][c] = 0;
                                        }
                                    }
                                }

                                // Set the marked rows to zero
                                for (int r = 1; r < rows; r++) {
                                    if (matrix[r][0] == 0) {
                                        for (int c = 1; c < cols; c++) {
                                            matrix[r][c] = 0;
                                        }
                                    }
                                }

                                // Set the marked columns to zero
                                for (int c = 1; c < cols; c++) {
                                    if (matrix[0][c] == 0) {
                                        for (int r = 1; r < rows; r++) {
                                            matrix[r][c] = 0;
                                        }
                                    }
                                }

                                // Set the first row to zero if needed
                                if (firstRowHasZero) {
                                    for (int c = 0; c < cols; c++) {
                                        matrix[0][c] = 0;
                                    }
                                }

                                // Set the first column to zero if needed
                                if (firstColHasZero) {
                                    for (int r = 0; r < rows; r++) {
                                        matrix[r][0] = 0;
                                    }
                                }        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def setZeroes(self, matrix: List[List[int]]) -> None:
                                rows = len(matrix)
                                cols = len(matrix[0])

                                first_row_has_zero = False        
                                first_col_has_zero = False

                                # check if the first row contains zero
                                for c in range(cols):
                                    if matrix[0][c] == 0:
                                        first_row_has_zero = True
                                        break

                                # check if the first column contains zero
                                for r in range(rows):
                                    if matrix[r][0] == 0:
                                        first_col_has_zero = True
                                        break
                                
                                # use the first row and column as a note
                                for r in range(1, rows):
                                    for c in range(1, cols):
                                        if matrix[r][c] == 0:
                                            matrix[r][0] = 0
                                            matrix[0][c] = 0
                                
                                # set the marked rows to zero
                                for r in range(1, rows):
                                    if matrix[r][0] == 0:
                                        for c in range(1, cols):
                                            matrix[r][c] = 0

                                # set the marked columns to zero
                                for c in range(1, cols):
                                    if matrix[0][c] == 0:
                                        for r in range(1, rows):
                                            matrix[r][c] = 0
                            
                                # set the first row to zero if needed
                                if first_row_has_zero:
                                    for c in range(cols):
                                        matrix[0][c] = 0

                                # set the first column to zero if needed
                                if first_col_has_zero:
                                    for r in range(rows):
                                        matrix[r][0] = 0
                                
                                return matrix
                    `
                ,
                java:
                    `
                        class Solution {
                            public void setZeroes(int[][] matrix) {
                                int rows = matrix.length;
                                int cols = matrix[0].length;

                                boolean firstRowHasZero = false;
                                boolean firstColHasZero = false;

                                // Check if the first row contains zero
                                for (int c = 0; c < cols; c++) {
                                    if (matrix[0][c] == 0) {
                                        firstRowHasZero = true;
                                        break;
                                    }
                                }

                                // Check if the first column contains zero
                                for (int r = 0; r < rows; r++) {
                                    if (matrix[r][0] == 0) {
                                        firstColHasZero = true;
                                        break;
                                    }
                                }

                                // Use the first row and column as markers
                                for (int r = 1; r < rows; r++) {
                                    for (int c = 1; c < cols; c++) {
                                        if (matrix[r][c] == 0) {
                                            matrix[r][0] = 0;
                                            matrix[0][c] = 0;
                                        }
                                    }
                                }

                                // Set the marked rows to zero
                                for (int r = 1; r < rows; r++) {
                                    if (matrix[r][0] == 0) {
                                        for (int c = 1; c < cols; c++) {
                                            matrix[r][c] = 0;
                                        }
                                    }
                                }

                                // Set the marked columns to zero
                                for (int c = 1; c < cols; c++) {
                                    if (matrix[0][c] == 0) {
                                        for (int r = 1; r < rows; r++) {
                                            matrix[r][c] = 0;
                                        }
                                    }
                                }

                                // Set the first row to zero if needed
                                if (firstRowHasZero) {
                                    for (int c = 0; c < cols; c++) {
                                        matrix[0][c] = 0;
                                    }
                                }

                                // Set the first column to zero if needed
                                if (firstColHasZero) {
                                    for (int r = 0; r < rows; r++) {
                                        matrix[r][0] = 0;
                                    }
                                }        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 10,
        name: "Sliding Puzzle",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/sliding-puzzle/",
        solution: {
            description: "Given the puzzle board board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int slidingPuzzle(vector<vector<int>>& board) {
                                vector<vector<int>> dir = {{1, 3}, {0, 2, 4}, {1, 5}, {0, 4}, {1, 3, 5}, {2, 4}};
                                string target = "123450";
                                set<string> vis; 
                                queue<string> q;
                                string start = "";

                                // Convert 2D board to a single string
                                for (auto row : board) {
                                    for (auto col : row) {
                                        start += col + '0';
                                    }
                                }

                                q.push(start);
                                vis.insert(start);
                                int step = 0;

                                // Perform BFS
                                while (!q.empty()) {
                                    int size = q.size();
                                    while (size--) {
                                        string current = q.front();
                                        q.pop();

                                        if (current == target) return step;
                                        int zero = current.find('0'); 

                                        // Generate next moves
                                        for (auto move : dir[zero]) {
                                            string next = current;
                                            swap(next[move], next[zero]);
                                            if (!vis.count(next)) {
                                                vis.insert(next);
                                                q.push(next);
                                            }
                                        }
                                    }
                                    step++;
                                }
                                return -1;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def slidingPuzzle(self, board):
                                dir = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]]
                                target = "123450"
                                vis = set() # Track visited configurations
                                q = deque()
                                start = ""

                                # Convert 2D board to a single string
                                for row in board:
                                    for col in row:
                                        start += str(col)

                                q.append(start)
                                vis.add(start)
                                step = 0

                                # Perform BFS
                                while q:
                                    size = len(q)
                                    for _ in range(size):
                                        current = q.popleft()

                                        if current == target:
                                            return step

                                        zero = current.find('0')

                                        # Generate next moves
                                        for move in dir[zero]:
                                            next_state = list(current)
                                            next_state[zero], next_state[move] = next_state[move], next_state[zero]
                                            next_state = ''.join(next_state)
                                            if next_state not in vis: 
                                                vis.add(next_state)
                                                q.append(next_state)
                                    step += 1
                                return -1 
                    `
                ,
                java:
                    `
                        class Solution {
                            public int slidingPuzzle(int[][] board) {
                                int[][] dir = {{1, 3}, {0, 2, 4}, {1, 5}, {0, 4}, {1, 3, 5}, {2, 4}};
                                String target = "123450";
                                Set<String> vis = new HashSet<>(); // Track visited configurations
                                Queue<String> q = new LinkedList<>();
                                String start = "";

                                // Convert 2D board to a single string
                                for (int[] row : board) {
                                    for (int col : row) {
                                        start += col;
                                    }
                                }

                                q.offer(start);
                                vis.add(start);
                                int step = 0;

                                // Perform BFS
                                while (!q.isEmpty()) {
                                    int size = q.size();
                                    while (size-- > 0) {
                                        String current = q.poll();

                                        if (current.equals(target)) return step;
                                        int zero = current.indexOf('0');

                                        // Generate next moves
                                        for (int move : dir[zero]) {
                                            StringBuilder next = new StringBuilder(current);
                                            char temp = next.charAt(zero);
                                            next.setCharAt(zero, next.charAt(move));
                                            next.setCharAt(move, temp);

                                            if (!vis.contains(next.toString())) {
                                                vis.add(next.toString());
                                                q.offer(next.toString());
                                            }
                                        }
                                    }
                                    step++;
                                }
                                return -1;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 11,
        name: "Maximal Rectangle",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/maximal-rectangle/",
        solution: {
            description: "Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int maximalRectangle(vector<vector<char>>& matrix) {
                                if (matrix.empty() || matrix[0].empty())
                                    return 0;
                                
                                int rows = matrix.size();
                                int cols = matrix[0].size();
                                vector<int> heights(cols + 1, 0);
                                int maxArea = 0;
                                
                                for (const auto& row : matrix) {
                                    for (int i = 0; i < cols; i++) {
                                        heights[i] = (row[i] == '1') ? heights[i] + 1 : 0;
                                    }
                                    
                                    // Calculate max area using histogram method
                                    int n = heights.size(); 
                                    
                                    for (int i = 0; i < n; i++) {
                                        for (int j = i, minHeight = INT_MAX; j < n; j++) {
                                            minHeight = min(minHeight, heights[j]);
                                            int area = minHeight * (j - i + 1);
                                            maxArea = max(maxArea, area);
                                        }
                                    }
                                }
                                
                                return maxArea;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def maximalRectangle(self, matrix: List[List[str]]) -> int:
                                if not matrix: return 0
                                
                                rows, cols = len(matrix), len(matrix[0])
                                heights = [0] * (cols + 1)  # Include an extra element for easier calculation
                                max_area = 0
                                
                                for row in matrix:
                                    for i in range(cols):
                                        heights[i] = heights[i] + 1 if row[i] == '1' else 0
                                    
                                    n = len(heights) 

                                    for i in range(n):
                                        for j in range(i, n):
                                            # Determine the minimum height between bar i and bar j
                                            min_height = min(heights[k] for k in range(i, j + 1))
                                            area = min_height * (j - i + 1)
                                            if area > max_area:
                                                max_area = area

                                return max_area
                    `
                ,
                java:
                    `
                        class Solution {
                            public int maximalRectangle(char[][] matrix) {
                                if (matrix == null || matrix.length == 0 || matrix[0].length == 0)
                                    return 0;
                                
                                int rows = matrix.length;
                                int cols = matrix[0].length;
                                int[] heights = new int[cols + 1];
                                int maxArea = 0;
                                
                                for (char[] row : matrix) {
                                    for (int i = 0; i < cols; i++) {
                                        heights[i] = (row[i] == '1') ? heights[i] + 1 : 0;
                                    }
                                    
                                    int n = heights.length;
                                    
                                    for (int i = 0; i < n; i++) {
                                        for (int j = i, minHeight = Integer.MAX_VALUE; j < n; j++) {
                                            minHeight = Math.min(minHeight, heights[j]);
                                            int area = minHeight * (j - i + 1);
                                            maxArea = Math.max(maxArea, area);
                                        }
                                    }
                                }
                                
                                return maxArea;
                            }
                        }
                    `
            },
        }
    },
]

export const HashingData = [
    {
        id: 1,
        name: "Linked List Cycle",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/linked-list-cycle/",
        solution: {
            description: "Given head, the head of a linked list, determine if the linked list has a cycle in it. Return true if there is a cycle in the linked list. Otherwise, return false.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool hasCycle(ListNode *head) {
                                ListNode* fast = head;
                                ListNode* slow = head;

                                while (fast != nullptr && fast->next != nullptr) {
                                    fast = fast->next->next;
                                    slow = slow->next;

                                    if (fast == slow) {
                                        return true;
                                    }
                                }

                                return false;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def hasCycle(self, head: Optional[ListNode]) -> bool:
                            
                                fast = head
                                slow = head
                                
                                while fast and fast.next:
                                    fast = fast.next.next
                                    slow = slow.next
                                    
                                    if fast == slow:
                                        return True
                            
                                return False
                    `
                ,
                java:
                    `
                        public class Solution {
                            public boolean hasCycle(ListNode head) {
                                ListNode fast = head;
                                ListNode slow = head;

                                while (fast != null && fast.next != null) {
                                    fast = fast.next.next;
                                    slow = slow.next;

                                    if (fast == slow) {
                                        return true;
                                    }
                                }

                                return false;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 2,
        name: "Intersection of Two Linked Lists",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        solution: {
            description: "Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
                                ListNode* lista = headA;
                                ListNode* listb = headB;

                                while (lista != listb) {
                                    lista = (lista != nullptr) ? lista->next : headB;
                                    listb = (listb != nullptr) ? listb->next : headA;
                                }

                                return lista;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
                                lista = headA
                                listb = headB

                                while lista != listb:
                                    lista = lista.next if lista else headB
                                    listb = listb.next if listb else headA
                                
                                return listb
                    `
                ,
                java:
                    `
                        public class Solution {
                            public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
                                ListNode lista = headA;
                                ListNode listb = headB;

                                while (lista != listb) {
                                    lista = (lista != null) ? lista.next : headB;
                                    listb = (listb != null) ? listb.next : headA;
                                }

                                return lista;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 3,
        name: "Happy Number",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/happy-number/",
        solution: {
            description: "Write an algorithm to determine if a number n is happy. Return true if n is a happy number, and false if not.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool isHappy(int n) {
                                int slow = getNextNumber(n);
                                int fast = getNextNumber(getNextNumber(n));

                                while (slow != fast) {
                                    if (fast == 1) return true;
                                    slow = getNextNumber(slow);
                                    fast = getNextNumber(getNextNumber(fast));
                                }

                                return slow == 1;
                            }

                        private:
                            int getNextNumber(int n) {
                                int output = 0;
                                
                                while (n > 0) {
                                    int digit = n % 10;
                                    output += digit * digit;
                                    n = n / 10;
                                }
                                
                                return output;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def isHappy(self, n: int) -> bool:    
                                
                                def get_next_number(n):    
                                    output = 0
                                    
                                    while n:
                                        digit = n % 10
                                        output += digit ** 2
                                        n = n // 10
                                    
                                    return output

                                slow = get_next_number(n)
                                fast = get_next_number(get_next_number(n))

                                while slow != fast:
                                    if fast == 1: return True
                                    slow = get_next_number(slow)
                                    fast = get_next_number(get_next_number(fast))

                                return slow == 1
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean isHappy(int n) {
                                int slow = getNextNumber(n);
                                int fast = getNextNumber(getNextNumber(n));

                                while (slow != fast) {
                                    if (fast == 1) return true;
                                    slow = getNextNumber(slow);
                                    fast = getNextNumber(getNextNumber(fast));
                                }

                                return slow == 1;
                            }

                            private int getNextNumber(int n) {
                                int output = 0;
                                
                                while (n > 0) {
                                    int digit = n % 10;
                                    output += digit * digit;
                                    n = n / 10;
                                }
                                
                                return output;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 4,
        name: "Word Pattern",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/word-pattern/",
        solution: {
            description: "Given a pattern and a string s, find if s follows the same pattern. Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically: Each letter in pattern maps to exactly one unique word in s. Each unique word in s maps to exactly one letter in pattern. No two letters map to the same word, and no two words map to the same letter.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool wordPattern(std::string pattern, std::string s) {
                                std::istringstream iss(s);
                                std::vector<std::string> words;
                                std::string word;
                                
                                while (iss >> word) {
                                    words.push_back(word);}
                                
                                if (pattern.size() != words.size()) {
                                    return false;}

                                std::unordered_map<char, std::string> charToWord;
                                std::unordered_set<std::string> seenWords;

                                for (int i = 0; i < pattern.size(); ++i) {
                                    char c = pattern[i];
                                    const std::string& w = words[i];

                                    if (charToWord.count(c)) {
                                        if (charToWord[c] != w) {
                                            return false;
                                        }
                                    } 
                                        else {
                                        if (seenWords.count(w)) {
                                            return false;
                                        }
                                        charToWord[c] = w;
                                        seenWords.insert(w); 
                                    }
                                }
                                return true;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def wordPattern(self, pattern: str, s: str) -> bool:

                                s = s.split()

                                return (len(set(pattern)) ==
                                        len(set(s)) ==
                                        len(set(zip_longest(pattern,s))))
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean wordPattern(String pattern, String s) {
                                String[] words = s.split(" ");
                                
                                if (pattern.length() != words.length) {
                                    return false;
                                }

                                HashMap<Character, String> charToWord = new HashMap<>();
                                HashSet<String> seenWords = new HashSet<>();

                                for (int i = 0; i < pattern.length(); i++) {
                                    char c = pattern.charAt(i);
                                    String w = words[i];

                                    if (charToWord.containsKey(c)) {
                                        if (!charToWord.get(c).equals(w)) {
                                            return false;
                                        }
                                    } else {
                                        if (seenWords.contains(w)) {
                                            return false;
                                        }
                                        charToWord.put(c, w);
                                        seenWords.add(w);
                                    }
                                }
                                return true;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 5,
        name: "Isomorphic Strings",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/isomorphic-strings/",
        solution: {
            description: "Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool isIsomorphic(string s, string t) {
                                unordered_map<char, int> charIndexS;
                                unordered_map<char, int> charIndexT;

                                for (int i = 0; i < s.length(); i++) {
                                    if (charIndexS.find(s[i]) == charIndexS.end()) {
                                        charIndexS[s[i]] = i;
                                    }

                                    if (charIndexT.find(t[i]) == charIndexT.end()) {
                                        charIndexT[t[i]] = i;
                                    }

                                    if (charIndexS[s[i]] != charIndexT[t[i]]) {
                                        return false;
                                    }
                                }

                                return true;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def isIsomorphic(self, s: str, t: str) -> bool:
                                char_index_s = {}
                                char_index_t = {}

                                for i in range(len(s)):
                                    if s[i] not in char_index_s:
                                        char_index_s[s[i]] = i

                                    if t[i] not in char_index_t:
                                        char_index_t[t[i]] = i
                                    
                                    if char_index_s[s[i]] != char_index_t[t[i]]:
                                        return False

                                return True
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean isIsomorphic(String s, String t) {
                                HashMap<Character, Integer> charIndexS = new HashMap<>();
                                HashMap<Character, Integer> charIndexT = new HashMap<>();

                                for (int i = 0; i < s.length(); i++) {
                                    if (!charIndexS.containsKey(s.charAt(i))) {
                                        charIndexS.put(s.charAt(i), i);
                                    }

                                    if (!charIndexT.containsKey(t.charAt(i))) {
                                        charIndexT.put(t.charAt(i), i);
                                    }

                                    if (!charIndexS.get(s.charAt(i)).equals(charIndexT.get(t.charAt(i)))) {
                                        return false;
                                    }
                                }

                                return true;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 6,
        name: "Top K Frequent Elements",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/top-k-frequent-elements/",
        solution: {
            description: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            vector<int> topKFrequent(vector<int>& nums, int k) {
                                unordered_map<int, int> counter;
                                for (int n : nums) {
                                    counter[n]++;
                                }
                                
                                vector<vector<int>> freq(nums.size() + 1);
                                for (auto& entry : counter) {
                                    freq[entry.second].push_back(entry.first);
                                }
                                
                                vector<int> res;
                                for (int i = freq.size() - 1; i >= 0; i--) {
                                    for (int num : freq[i]) {
                                        res.push_back(num);
                                        if (res.size() == k) {
                                            return res;
                                        }
                                    }
                                }
                                
                                return {};        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def topKFrequent(self, nums: List[int], k: int) -> List[int]:
                                counter = {}

                                for n in nums:
                                    counter[n] = 1 + counter.get(n, 0)
                                
                                freq = [[] for _ in range(len(nums) + 1)]

                                for n, f in counter.items():
                                    freq[f].append(n)
                                
                                res = []

                                for i in range(len(freq) - 1, -1, -1):
                                    for n in freq[i]:
                                        res.append(n)
                                        if len(res) == k:
                                            return res
                    `
                ,
                java:
                    `
                        class Solution {
                            public int[] topKFrequent(int[] nums, int k) {
                                Map<Integer, Integer> counter = new HashMap<>();
                                for (int n : nums) {
                                    counter.put(n, counter.getOrDefault(n, 0) + 1);
                                }
                                
                                List<Integer>[] freq = new ArrayList[nums.length + 1];
                                for (int i = 0; i < freq.length; i++) {
                                    freq[i] = new ArrayList<>();
                                }
                                
                                for (Map.Entry<Integer, Integer> entry : counter.entrySet()) {
                                    int frequency = entry.getValue();
                                    freq[frequency].add(entry.getKey());
                                }
                                
                                int[] res = new int[k];
                                int idx = 0;
                                for (int i = freq.length - 1; i >= 0; i--) {
                                    for (int num : freq[i]) {
                                        res[idx++] = num;
                                        if (idx == k) {
                                            return res;
                                        }
                                    }
                                }
                                
                                return new int[0];        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 7,
        name: "Find All Anagrams in a String",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        solution: {
            description: "Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            vector<int> findAnagrams(string s, string p) {
                                if (s.size() < p.size()) return {};
                                
                                array<int, 26> pFreq = {0};
                                array<int, 26> windowFreq = {0};
                                vector<int> res;

                                for (int i = 0; i < p.size(); i++) {
                                    pFreq[p[i] - 'a']++;
                                    windowFreq[s[i] - 'a']++;
                                }

                                if (pFreq == windowFreq) res.push_back(0);

                                for (int windowEnd = p.size(); windowEnd < s.size(); windowEnd++) {
                                    int windowStart = windowEnd - p.size();
                                    windowFreq[s[windowStart] - 'a']--;
                                    windowFreq[s[windowEnd] - 'a']++;
                                    if (pFreq == windowFreq) res.push_back(windowStart + 1);
                                }

                                return res;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def findAnagrams(self, s: str, p: str):
                                if len(s) < len(p):
                                    return []

                                p_freq = [0] * 26
                                window_freq = [0] * 26
                                res = []

                                for i in range(len(p)):
                                    p_freq[ord(p[i]) - ord('a')] += 1
                                    window_freq[ord(s[i]) - ord('a')] += 1

                                if p_freq == window_freq:
                                    res.append(0)

                                for window_end in range(len(p), len(s)):
                                    window_start = window_end - len(p)
                                    window_freq[ord(s[window_start]) - ord('a')] -= 1
                                    window_freq[ord(s[window_end]) - ord('a')] += 1
                                    if p_freq == window_freq:
                                        res.append(window_start + 1)

                                return res
                    `
                ,
                java:
                    `
                        class Solution {
                            public List<Integer> findAnagrams(String s, String p) {
                                if (s.length() < p.length()) return List.of();
                                int[] pFreq = new int[26];
                                int[] windowFreq = new int[26];
                                List<Integer> res = new ArrayList<>();

                                for (int i = 0; i < p.length(); i++) {
                                    pFreq[p.charAt(i) - 'a']++;
                                    windowFreq[s.charAt(i) - 'a']++;
                                } 

                                if (Arrays.equals(pFreq, windowFreq)) res.add(0);

                                for (int windowEnd = p.length(); windowEnd < s.length(); windowEnd++) {
                                    int windowStart = windowEnd - p.length() + 1;
                                    windowFreq[s.charAt(windowStart - 1) - 'a']--;
                                    windowFreq[s.charAt(windowEnd) - 'a']++;
                                    if (Arrays.equals(pFreq, windowFreq)) res.add(windowStart);
                                }
                                return res;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 8,
        name: "Linked List Cycle II",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/linked-list-cycle-ii/",
        solution: {
            description: "Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            ListNode *detectCycle(ListNode *head) {
                                ListNode* slow = head;
                                ListNode* fast = head;

                                while (fast && fast->next) {
                                    slow = slow->next;
                                    fast = fast->next->next;

                                    if (slow == fast) break;
                                }

                                if (!fast || !fast->next) return nullptr;

                                fast = head;
                                while (fast != slow) {
                                    fast = fast->next;
                                    slow = slow->next;
                                }

                                return slow;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
                                slow = fast = head

                                while fast and fast.next:
                                    slow = slow.next
                                    fast = fast.next.next

                                    if slow == fast:
                                        break
                                else: return None

                                fast = head

                                while fast != slow:
                                    fast = fast.next
                                    slow = slow.next
                                
                                return slow
                    `
                ,
                java:
                    `
                        public class Solution {
                            public ListNode detectCycle(ListNode head) {
                                ListNode slow = head, fast = head;

                                while (fast != null && fast.next != null) {
                                    slow = slow.next;
                                    fast = fast.next.next;

                                    if (slow == fast) break;
                                }

                                if (fast == null || fast.next == null) return null;

                                fast = head;
                                while (fast != slow) {
                                    fast = fast.next;
                                    slow = slow.next;
                                }

                                return slow;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 9,
        name: "Word Ladder",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/word-ladder/",
        solution: {
            description: "Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
                                unordered_set<string> dict(wordList.begin(), wordList.end());
                                queue<string> todo;
                                todo.push(beginWord);
                                int ladder = 1;
                                while (!todo.empty()) {
                                    int n = todo.size();
                                    for (int i = 0; i < n; i++) {
                                        string word = todo.front();
                                        todo.pop();
                                        if (word == endWord) {
                                            return ladder;
                                        }
                                        dict.erase(word);
                                        for (int j = 0; j < word.size(); j++) {
                                            char c = word[j];
                                            for (int k = 0; k < 26; k++) {
                                                word[j] = 'a' + k;
                                                if (dict.find(word) != dict.end()) {
                                                    todo.push(word);
                                                }
                                            }
                                            word[j] = c;
                                        }
                                    }
                                    ladder++;
                                }
                                return 0;
                            }
                        };
                    `
                ,
                python:
                   `
                    class Solution:
                        def ladderLength(self, beginWord: str, endWord: str, wordList: list[str]) -> int:
                            word_set = set(wordList) 
                            if endWord not in word_set: return 0

                            queue = deque([beginWord])
                            ladder = 1

                            while queue:
                                for _ in range(len(queue)):
                                    word = queue.popleft()
                                    if word == endWord:
                                        return ladder
                                    word_set.discard(word) 

                                    for i in range(len(word)):
                                        original_char = word[i]
                                        for k in range(26):
                                            word = word[:i] + chr(ord('a') + k) + word[i+1:]
                                            if word in word_set:
                                                queue.append(word)
                                        word = word[:i] + original_char + word[i+1:] 
                                ladder += 1

                            return 0
                   `
                ,
                java:
                    `
                        class Solution {
                            public int ladderLength(String beginWord, String endWord, List<String> wordList) {
                                Set<String> dict = new HashSet<>(wordList);
                                if (!dict.contains(endWord)) {
                                    return 0;
                                }

                                Queue<String> queue = new LinkedList<>();
                                queue.add(beginWord);
                                int ladder = 1;

                                while (!queue.isEmpty()) {
                                    int n = queue.size();
                                    for (int i = 0; i < n; i++) {
                                        String word = queue.poll();
                                        if (word.equals(endWord)) {
                                            return ladder;
                                        }
                                        dict.remove(word);  
                                        char[] wordArray = word.toCharArray();
                                        for (int j = 0; j < wordArray.length; j++) {
                                            char originalChar = wordArray[j];
                                            for (char k = 'a'; k <= 'z'; k++) {
                                                wordArray[j] = k;
                                                String newWord = new String(wordArray);
                                                if (dict.contains(newWord)) {
                                                    queue.add(newWord);
                                                }
                                            }
                                            wordArray[j] = originalChar; 
                                        }
                                    }
                                    ladder++;
                                }

                                return 0;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 10,
        name: "Sudoku Solver",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/sudoku-solver/",
        solution: {
            description: "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the following rules: 1. Each of the digits 1-9 must occur exactly once in each row. 2. Each of the digits 1-9 must occur exactly once in each column. 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid. 4. The '.' character indicates empty cells.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void solveSudoku(vector<vector<char>>& board) {
                                int row[9]{}, col[9]{}, box[9]{};
                                vector<int> R, C, cc;
                                for (int i = 0; i < 9; i++) {
                                    for (int j = 0; j < 9; j++) {
                                        if (board[i][j] == '.') {
                                            R.push_back(i);
                                            C.push_back(j);
                                        } else {
                                            int d = board[i][j] - '1', m = 1 << d, b = (i / 3) * 3 + j / 3;
                                            row[i] |= m; col[j] |= m; box[b] |= m;
                                        }
                                    }
                                }
                                cc.resize(R.size());
                                auto countBits = [&](int x) { int c = 0; while (x) { x &= x - 1; c++; } return c; };
                                function<int(int)> cand = [&](int idx) {
                                    int r = R[idx], c = C[idx], b = (r / 3) * 3 + c / 3;
                                    return countBits((~(row[r] | col[c] | box[b])) & 0x1ff);
                                };
                                auto recalc = [&]() {
                                    for (int i = 0; i < (int)R.size(); i++) {
                                        if (board[R[i]][C[i]] == '.') cc[i] = cand(i);
                                    }
                                };
                                for (int i = 0; i < (int)R.size(); i++) cc[i] = cand(i);
                                function<bool(int)> dfs = [&](int filled) {
                                    if (filled == (int)R.size()) return true;
                                    int best = -1, bc = 10;
                                    for (int i = 0; i < (int)R.size(); i++) {
                                        if (board[R[i]][C[i]] == '.' && cc[i] < bc) {
                                            bc = cc[i]; best = i;
                                            if (!bc) return false;
                                            if (bc < 2) break;
                                        }
                                    }
                                    int r = R[best], c = C[best], b = (r / 3) * 3 + c / 3;
                                    int mask = (~(row[r] | col[c] | box[b])) & 0x1ff;
                                    while (mask) {
                                        int pick = mask & -mask, d = __builtin_ctz(pick);
                                        board[r][c] = d + '1'; row[r] |= pick; col[c] |= pick; box[b] |= pick;
                                        recalc();
                                        if (dfs(filled + 1)) return true;
                                        board[r][c] = '.'; row[r] ^= pick; col[c] ^= pick; box[b] ^= pick;
                                        recalc();
                                        mask &= mask - 1;
                                    }
                                    return false;
                                };
                                dfs(0);
                            }
                        };
                    `
                ,
                python:
                   `
                        class Solution:
                            def solveSudoku(self, board: list[list[str]]) -> None:
                                row = [0] * 9
                                col = [0] * 9
                                box = [0] * 9
                                R, C, cc = [], [], []

                                def countBits(x):
                                    c = 0
                                    while x:
                                        x &= x - 1
                                        c += 1
                                    return c

                                def cand(idx):
                                    r, c = R[idx], C[idx]
                                    b = (r // 3) * 3 + c // 3
                                    return countBits((~(row[r] | col[c] | box[b])) & 0x1ff)

                                def recalc():
                                    for i in range(len(R)):
                                        if board[R[i]][C[i]] == '.':
                                            cc[i] = cand(i)

                                for i in range(9):
                                    for j in range(9):
                                        if board[i][j] == '.':
                                            R.append(i)
                                            C.append(j)
                                        else:
                                            d = ord(board[i][j]) - ord('1')
                                            m = 1 << d
                                            b = (i // 3) * 3 + j // 3
                                            row[i] |= m
                                            col[j] |= m
                                            box[b] |= m

                                cc = [cand(i) for i in range(len(R))]

                                def dfs(filled):
                                    if filled == len(R):
                                        return True
                                    best, bc = -1, 10
                                    for i in range(len(R)):
                                        if board[R[i]][C[i]] == '.' and cc[i] < bc:
                                            bc = cc[i]
                                            best = i
                                            if not bc:
                                                return False
                                            if bc < 2:
                                                break

                                    r, c = R[best], C[best]
                                    b = (r // 3) * 3 + c // 3
                                    mask = (~(row[r] | col[c] | box[b])) & 0x1ff
                                    while mask:
                                        pick = mask & -mask
                                        d = (pick.bit_length() - 1)
                                        board[r][c] = chr(d + ord('1'))
                                        row[r] |= pick
                                        col[c] |= pick
                                        box[b] |= pick
                                        recalc()
                                        if dfs(filled + 1):
                                            return True
                                        board[r][c] = '.'
                                        row[r] ^= pick
                                        col[c] ^= pick
                                        box[b] ^= pick
                                        recalc()
                                        mask &= mask - 1
                                    return False

                                dfs(0)
                   `
                ,
                java:
                    `
                        class Solution {
                            public void solveSudoku(char[][] board) {
                                int[] row = new int[9], col = new int[9], box = new int[9];
                                List<Integer> R = new ArrayList<>(), C = new ArrayList<>();
                                int[] cc;

                                for (int i = 0; i < 9; i++) {
                                    for (int j = 0; j < 9; j++) {
                                        if (board[i][j] == '.') {
                                            R.add(i);
                                            C.add(j);
                                        } else {
                                            int d = board[i][j] - '1';
                                            int m = 1 << d;
                                            int b = (i / 3) * 3 + j / 3;
                                            row[i] |= m;
                                            col[j] |= m;
                                            box[b] |= m;
                                        }
                                    }
                                }

                                cc = new int[R.size()];

                                for (int i = 0; i < R.size(); i++) {
                                    cc[i] = cand(R.get(i), C.get(i), row, col, box);
                                }

                                dfs(0, R, C, cc, board, row, col, box);
                            }

                            private int cand(int r, int c, int[] row, int[] col, int[] box) {
                                int b = (r / 3) * 3 + c / 3;
                                return Integer.bitCount((~(row[r] | col[c] | box[b])) & 0x1FF);
                            }

                            private void recalc(List<Integer> R, List<Integer> C, int[] cc, char[][] board, int[] row, int[] col, int[] box) {
                                for (int i = 0; i < R.size(); i++) {
                                    if (board[R.get(i)][C.get(i)] == '.') {
                                        cc[i] = cand(R.get(i), C.get(i), row, col, box);
                                    }
                                }
                            }

                            private boolean dfs(int filled, List<Integer> R, List<Integer> C, int[] cc, char[][] board, int[] row, int[] col, int[] box) {
                                if (filled == R.size()) return true;

                                int best = -1, bc = 10;
                                for (int i = 0; i < R.size(); i++) {
                                    if (board[R.get(i)][C.get(i)] == '.' && cc[i] < bc) {
                                        bc = cc[i];
                                        best = i;
                                        if (bc == 0) return false;
                                        if (bc < 2) break;
                                    }
                                }

                                int r = R.get(best), c = C.get(best), b = (r / 3) * 3 + c / 3;
                                int mask = (~(row[r] | col[c] | box[b])) & 0x1FF;

                                while (mask != 0) {
                                    int pick = mask & -mask;
                                    int d = Integer.numberOfTrailingZeros(pick);
                                    board[r][c] = (char) (d + '1');
                                    row[r] |= pick;
                                    col[c] |= pick;
                                    box[b] |= pick;

                                    recalc(R, C, cc, board, row, col, box);

                                    if (dfs(filled + 1, R, C, cc, board, row, col, box)) return true;

                                    board[r][c] = '.';
                                    row[r] ^= pick;
                                    col[c] ^= pick;
                                    box[b] ^= pick;

                                    recalc(R, C, cc, board, row, col, box);

                                    mask &= mask - 1;
                                }

                                return false;
                            }
                        }
                    `
            },
        }
    },
]

export const TwoPointerData = [
    {
        id: 1,
        name: "Remove Duplicates from Sorted Array",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        solution: {
            description: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int removeDuplicates(vector<int>& nums) {
                                if (nums.empty()) return 0;

                                int i = 1;

                                for (int j = 1; j < nums.size(); j++) {
                                    if (nums[j] != nums[i - 1]) {
                                        nums[i] = nums[j];
                                        i++;
                                    }
                                }

                                return i;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def removeDuplicates(self, nums: List[int]) -> int:
                                i = 1

                                for j in range(1, len(nums)):
                                    if nums[j] != nums[i - 1]:
                                        nums[i] = nums[j]
                                        i += 1
                                
                                return i
                    `
                ,
                java:
                    `
                        class Solution {
                            public int removeDuplicates(int[] nums) {
                                if (nums.length == 0) return 0;

                                int i = 1;

                                for (int j = 1; j < nums.length; j++) {
                                    if (nums[j] != nums[i - 1]) {
                                        nums[i] = nums[j];
                                        i++;
                                    }
                                }

                                return i;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 2,
        name: "Find the Index of the First Occurrence in a String",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        solution: {
            description: "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int strStr(string haystack, string needle) {
                                if (haystack.length() < needle.length()) {
                                    return -1;
                                }
                                
                                for (int i = 0; i <= haystack.length() - needle.length(); i++) {
                                    if (haystack.substr(i, needle.length()) == needle) {
                                        return i;
                                    }
                                }
                                
                                return -1;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def strStr(self, haystack: str, needle: str) -> int:

                                if len(haystack) < len(needle):
                                    return -1

                                for i in range(len(haystack)):
                                    if haystack[i:i+len(needle)] == needle:
                                        return i

                                return -1 
                    `
                ,
                java:
                    `
                        class Solution {
                            public int strStr(String haystack, String needle) {
                                if (haystack.length() < needle.length()) {
                                    return -1;
                                }
                                
                                for (int i = 0; i <= haystack.length() - needle.length(); i++) {
                                    if (haystack.substring(i, i + needle.length()).equals(needle)) {
                                        return i;
                                    }
                                }
                                
                                return -1;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 3,
        name: "Palindrome Linked List",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/palindrome-linked-list/",
        solution: {
            description: "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool isPalindrome(ListNode* head) {
                                vector<int> listVals;
                                while (head) {
                                    listVals.push_back(head->val);
                                    head = head->next;
                                }
                                
                                int left = 0, right = listVals.size() - 1;
                                while (left < right && listVals[left] == listVals[right]) {
                                    left++;
                                    right--;
                                }
                                return left >= right;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def isPalindrome(self, head: Optional[ListNode]) -> bool:
                                list_vals = []
                                while head:
                                    list_vals.append(head.val)
                                    head = head.next
                                
                                left, right = 0, len(list_vals) - 1
                                while left < right and list_vals[left] == list_vals[right]:
                                    left += 1
                                    right -= 1
                                return left >= right
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean isPalindrome(ListNode head) {
                                List<Integer> list = new ArrayList();
                                while(head != null) {
                                    list.add(head.val);
                                    head = head.next;
                                }
                                
                                int left = 0;
                                int right = list.size()-1;
                                while(left < right && list.get(left) == list.get(right)) {
                                    left++;
                                    right--;
                                }
                                return left >= right;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 4,
        name: "Move Zeroes",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/move-zeroes/",
        solution: {
            description: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void moveZeroes(vector<int>& nums) {
                                int left = 0;

                                for (int right = 0; right < nums.size(); right++) {
                                    if (nums[right] != 0) {
                                        swap(nums[right], nums[left]);
                                        left++;
                                    }
                                }        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def moveZeroes(self, nums: List[int]) -> None:
                                left = 0

                                for right in range(len(nums)):
                                    if nums[right] != 0:
                                        nums[right], nums[left] = nums[left], nums[right]
                                        left += 1
                                
                                return nums
                    `
                ,
                java:
                    `
                        class Solution {
                            public void moveZeroes(int[] nums) {
                                int left = 0;

                                for (int right = 0; right < nums.length; right++) {
                                    if (nums[right] != 0) {
                                        int temp = nums[right];
                                        nums[right] = nums[left];
                                        nums[left] = temp;
                                        left++;
                                    }
                                }        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 5,
        name: "Reverse String",
        img: share,
        level: "Easy",
        url: "https://leetcode.com/problems/reverse-string/",
        solution: {
            description: "Write a function that reverses a string. The input string is given as an array of characters s.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            void reverseString(vector<char>& s) {
                                int left = 0, right = s.size() - 1;
                                while (left < right) {
                                    swap(s[left], s[right]);
                                    left++;
                                    right--;
                                }
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def reverseString(self, s: List[str]) -> None:
                                left, right = 0, len(s) - 1
                                while left < right:
                                    s[left], s[right] = s[right], s[left]
                                    left += 1
                                    right -= 1
                    `
                ,
                java:
                    `
                        class Solution {
                            public void reverseString(char[] s) {
                                int left = 0, right = s.length - 1;
                                while (left < right) {
                                    char temp = s[left];
                                    s[left] = s[right];
                                    s[right] = temp;
                                    left++;
                                    right--;
                                }
                            }
                        }
                    `
            },
        }
    },
    {
        id: 6,
        name: "String Compression",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/string-compression/",
        solution: {
            description: "Given an array of characters chars, compress it using the following algorithm: Begin with an empty string s. For each group of consecutive repeating characters in chars: If the group's length is 1, append the character to s. Otherwise, append the character followed by the group's length.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            int compress(vector<char>& c) {
                                int n = c.size();
                                if (n == 0) return 0;
                                int w = 0,r = 0;
                                while (r < n) {
                                    char x = c[r];
                                    int cnt = 0;
                                    while (r < n && c[r] == x) {
                                        r++,cnt++;
                                    }
                                    c[w++] = x;
                                    if (cnt > 1) {
                                        for (char d : to_string(cnt)) {
                                            c[w++] = d;
                                        }
                                    }
                                }
                                return w;
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def compress(self, c: list[str]) -> int:
                                n = len(c)
                                if n == 0: return 0
                                w = 0
                                r = 0
                                while r < n:
                                    x = c[r]
                                    cnt = 0
                                    while r < n and c[r] == x:
                                        r += 1
                                        cnt += 1
                                    c[w] = x
                                    w += 1
                                    if cnt > 1:
                                        for d in str(cnt):
                                            c[w] = d
                                            w += 1
                                return w
                    `
                ,
                java:
                    `
                        class Solution {
                            public int compress(char[] c) {
                                int n = c.length;
                                if (n == 0) return 0;
                                int w = 0;
                                int r = 0;
                                while (r < n) {
                                    char x = c[r];
                                    int cnt = 0;
                                    while (r < n && c[r] == x) {
                                        r++;
                                        cnt++;
                                    }
                                    c[w++] = x;
                                    if (cnt > 1) {
                                        for (char d : Integer.toString(cnt).toCharArray()) {
                                            c[w++] = d;
                                        }
                                    }
                                }
                                return w;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 7,
        name: "Permutation in String",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/permutation-in-string/",
        solution: {
            description: "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise. In other words, return true if one of s1's permutations is the substring of s2.",
            code:{
                cpp: 
                    `
                        class Solution {
                        public:
                            bool checkInclusion(string s1, string s2) {
                                if (s1.length() > s2.length()) {
                                    return false;
                                }
                                
                                unordered_map<char, int> s1Count;
                                unordered_map<char, int> s2Count;
                                
                                for (int i = 0; i < s1.length(); i++) {
                                    s1Count[s1[i]]++;
                                    s2Count[s2[i]]++;
                                }
                                
                                if (s1Count == s2Count) {
                                    return true;
                                }
                                
                                int left = 0;
                                for (int right = s1.length(); right < s2.length(); right++) {
                                    s2Count[s2[right]]++;
                                    s2Count[s2[left]]--;
                                    
                                    if (s2Count[s2[left]] == 0) {
                                        s2Count.erase(s2[left]);
                                    }
                                    
                                    left++;
                                    
                                    if (s1Count == s2Count) {
                                        return true;
                                    }
                                }
                                
                                return false;        
                            }
                        };
                    `
                ,
                python:
                    `
                        class Solution:
                            def checkInclusion(self, s1: str, s2: str) -> bool:
                                if len(s1) > len(s2):
                                    return False

                                s1_count = {}
                                s2_count = {}

                                for i in range(len(s1)):
                                    s1_count[s1[i]] = 1 + s1_count.get(s1[i], 0)
                                    s2_count[s2[i]] = 1 + s2_count.get(s2[i], 0)

                                if s1_count == s2_count:
                                    return True

                                left = 0
                                for right in range(len(s1), len(s2)):
                                    s2_count[s2[right]] = 1 + s2_count.get(s2[right], 0)
                                    s2_count[s2[left]] -= 1

                                    if s2_count[s2[left]] == 0:
                                        del s2_count[s2[left]]

                                    left += 1

                                    if s1_count == s2_count:
                                        return True

                                return False
                    `
                ,
                java:
                    `
                        class Solution {
                            public boolean checkInclusion(String s1, String s2) {
                                if (s1.length() > s2.length()) {
                                    return false;
                                }
                                
                                HashMap<Character, Integer> s1Count = new HashMap<>();
                                HashMap<Character, Integer> s2Count = new HashMap<>();
                                
                                for (int i = 0; i < s1.length(); i++) {
                                    s1Count.put(s1.charAt(i), s1Count.getOrDefault(s1.charAt(i), 0) + 1);
                                    s2Count.put(s2.charAt(i), s2Count.getOrDefault(s2.charAt(i), 0) + 1);
                                }
                                
                                if (s1Count.equals(s2Count)) {
                                    return true;
                                }
                                
                                int left = 0;
                                for (int right = s1.length(); right < s2.length(); right++) {
                                    char charRight = s2.charAt(right);
                                    s2Count.put(charRight, s2Count.getOrDefault(charRight, 0) + 1);
                                    
                                    char charLeft = s2.charAt(left);
                                    s2Count.put(charLeft, s2Count.get(charLeft) - 1);
                                    if (s2Count.get(charLeft) == 0) {
                                        s2Count.remove(charLeft);
                                    }
                                    
                                    left++;
                                    
                                    if (s1Count.equals(s2Count)) {
                                        return true;
                                    }
                                }
                                
                                return false;        
                            }
                        }
                    `
            },
        }
    },
    {
        id: 8,
        name: "Next Greater Element III",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/next-greater-element-iii/",
        solution: {
            description: "Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.",
            code:{
                cpp: 
                   `
                        class Solution {
                        public:
                            int nextGreaterElement(int n) {
                                string temp=to_string(n);
                                int p=temp.size();
                                bool flag=false;
                                for(int i=0;i<temp.size()-1;i++){
                                    if((int)temp[i]<(int)temp[i+1]){
                                        flag=true;
                                        break;
                                    }
                                }
                                if(flag==false){
                                    return -1;
                                }
                                int lastDigit=temp[temp.size()-1];
                                int i=p-2;
                                int j;
                                for( i=p-2;i>=0;i--){
                                    if((int)lastDigit>(int)temp[i]){
                                        break;
                                    }
                                    lastDigit=temp[i];
                                }
                                if(i>=0){
                                    for( j=p-1;j>i;j--){
                                        if((int)temp[j]>(int)temp[i]){
                                            swap(temp[i],temp[j]);
                                            break;

                                        }
                                        
                                    }
                                }
                                sort(temp.begin()+i+1,temp.end());
                                // if(temp.size()>=10) return -1;
                                long long xx=stol(temp);
                                if(xx>INT_MAX){
                                    return -1;
                                }
                                
                                return xx;
                            
                                

                            }
                        };
                   `
                ,
                python:
                    `
                        class Solution:
                            def nextGreaterElement(self, n: int) -> int:
                                temp = list(str(n))
                                p = len(temp)
                                flag = False

                                for i in range(p - 1):
                                    if int(temp[i]) < int(temp[i + 1]):
                                        flag = True
                                        break

                                if not flag:
                                    return -1

                                lastDigit = temp[-1]
                                i = p - 2

                                while i >= 0:
                                    if int(lastDigit) > int(temp[i]):
                                        break
                                    lastDigit = temp[i]
                                    i -= 1

                                if i >= 0:
                                    for j in range(p - 1, i, -1):
                                        if int(temp[j]) > int(temp[i]):
                                            temp[i], temp[j] = temp[j], temp[i]
                                            break

                                temp = temp[:i + 1] + sorted(temp[i + 1:])
                                xx = int("".join(temp))

                                if xx > 2**31 - 1:
                                    return -1

                                return xx
                    `
                ,
                java:
                    `
                        class Solution {
                            public int nextGreaterElement(int n) {
                                char[] temp = String.valueOf(n).toCharArray();
                                int p = temp.length;
                                boolean flag = false;

                                for (int i = 0; i < p - 1; i++) {
                                    if (temp[i] < temp[i + 1]) {
                                        flag = true;
                                        break;
                                    }
                                }

                                if (!flag) {
                                    return -1;
                                }

                                int i = p - 2;
                                char lastDigit = temp[p - 1];

                                while (i >= 0) {
                                    if (lastDigit > temp[i]) {
                                        break;
                                    }
                                    lastDigit = temp[i];
                                    i--;
                                }

                                if (i >= 0) {
                                    for (int j = p - 1; j > i; j--) {
                                        if (temp[j] > temp[i]) {
                                            char tempChar = temp[i];
                                            temp[i] = temp[j];
                                            temp[j] = tempChar;
                                            break;
                                        }
                                    }
                                }

                                Arrays.sort(temp, i + 1, p);
                                long xx = Long.parseLong(new String(temp));

                                if (xx > Integer.MAX_VALUE) {
                                    return -1;
                                }

                                return (int) xx;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 9,
        name: "Shortest Subarray to be Removed to Make Array Sorted",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/",
        solution: {
            description: "Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing. Return the length of the shortest subarray to remove.",
            code:{
                cpp: 
                   `
                        class Solution {
                        public:
                            int findLengthOfShortestSubarray(vector<int>& arr) {
                                int n = arr.size();
                                
                                int left = 0;
                                while (left + 1 < n && arr[left] <= arr[left + 1]) {
                                    left++;
                                }
                                
                                if (left == n - 1) return 0;
                                int right = n - 1;
                                while (right > 0 && arr[right - 1] <= arr[right]) {
                                    right--;
                                }
                                
                                int result = min(n - left - 1, right);
                                int i = 0, j = right;
                                while (i <= left && j < n) {
                                    if (arr[i] <= arr[j]) {
                                        result = min(result, j - i - 1);
                                        i++;
                                    } else {
                                        j++;
                                    }
                                }
                                
                                return result;
                            }
                        };
                   `
                ,
                python:
                    `
                        class Solution:
                            def findLengthOfShortestSubarray(self, arr: List[int]) -> int:
                                n = len(arr)
                                
                                left = 0
                                while left + 1 < n and arr[left] <= arr[left + 1]:
                                    left += 1
                                
                                if left == n - 1:
                                    return 0
                                
                                right = n - 1
                                while right > 0 and arr[right - 1] <= arr[right]:
                                    right -= 1
                                
                                result = min(n - left - 1, right)
                                
                                i, j = 0, right
                                while i <= left and j < n:
                                    if arr[i] <= arr[j]:
                                        result = min(result, j - i - 1)
                                        i += 1
                                    else:
                                        j += 1
                                
                                return result
                    `
                ,
                java:
                    `
                        class Solution {
                            public int findLengthOfShortestSubarray(int[] arr) {
                                int n = arr.length;
                                
                                int left = 0;
                                while (left + 1 < n && arr[left] <= arr[left + 1]) {
                                    left++;
                                }
                                
                                if (left == n - 1) return 0;
                                int right = n - 1;
                                while (right > 0 && arr[right - 1] <= arr[right]) {
                                    right--;
                                }
                                
                                int result = Math.min(n - left - 1, right);
                                
                                int i = 0, j = right;
                                while (i <= left && j < n) {
                                    if (arr[i] <= arr[j]) {
                                        result = Math.min(result, j - i - 1);
                                        i++;
                                    } else {
                                        j++;
                                    }
                                }
                                
                                return result;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 10,
        name: "Sentence Similarity III",
        img: share,
        level: "Medium",
        url: "https://leetcode.com/problems/sentence-similarity-iii/",
        solution: {
            description: "Given two sentences sentence1 and sentence2, return true if sentence1 and sentence2 are similar. Otherwise, return false.",
            code:{
                cpp: 
                   `
                        class Solution {
                        public:
                            bool areSentencesSimilar(string sentence1, string sentence2) {
                                auto splitWords = [](const string& sentence) {
                                    vector<string> words;
                                    string word = "";
                                    for (char c : sentence) {
                                        if (c == ' ') {
                                            if (!word.empty()) {
                                                words.push_back(word);
                                                word = "";
                                            }
                                        } else {
                                            word += c;
                                        }
                                    }
                                    if (!word.empty()) words.push_back(word);
                                    return words;
                                };

                                vector<string> words1 = splitWords(sentence1);
                                vector<string> words2 = splitWords(sentence2);
                                
                                if (words1.size() < words2.size()) swap(words1, words2);
                                
                                int start = 0, end = 0;
                                int n1 = words1.size(), n2 = words2.size();
                                
                                while (start < n2 && words1[start] == words2[start]) start++;
                                while (end < n2 && words1[n1 - end - 1] == words2[n2 - end - 1]) end++;
                                return start + end >= n2;
                            }
                        };
                   `
                ,
                python:
                    `
                        class Solution:
                            def areSentencesSimilar(self, sentence1: str, sentence2: str) -> bool:
                                words1 = sentence1.split()
                                words2 = sentence2.split()

                                if len(words1) < len(words2):
                                    words1, words2 = words2, words1
                                
                                start, end = 0, 0
                                n1, n2 = len(words1), len(words2)
                                
                                while start < n2 and words1[start] == words2[start]:
                                    start += 1
                                
                                while end < n2 and words1[n1 - end - 1] == words2[n2 - end - 1]:
                                    end += 1
                                
                                return start + end >= n2
                    `
                ,
                java:
                    `
                        class Solution {
                            private String[] splitWords(String sentence) {
                                return sentence.split(" ");
                            }

                            public boolean areSentencesSimilar(String sentence1, String sentence2) {
                                String[] words1 = splitWords(sentence1);
                                String[] words2 = splitWords(sentence2);

                                if (words1.length < words2.length) {
                                    String[] temp = words1;
                                    words1 = words2;
                                    words2 = temp;
                                }

                                int start = 0, end = 0;
                                int n1 = words1.length, n2 = words2.length;

                                while (start < n2 && words1[start].equals(words2[start])) {
                                    start++;
                                }

                                while (end < n2 && words1[n1 - end - 1].equals(words2[n2 - end - 1])) {
                                    end++;
                                }

                                return start + end >= n2;
                            }
                        }
                    `
            },
        }
    },
    {
        id: 11,
        name: "Find Median from Data Stream",
        img: share,
        level: "Hard",
        url: "https://leetcode.com/problems/find-median-from-data-stream/",
        solution: {
            description: "The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.",
            code:{
                cpp: 
                   `
                        class MedianFinder {
                        public:
                            multiset<int> S;  
                            multiset<int>::iterator mid;  

                            MedianFinder() {
                            }
                            
                            void addNum(int num) {
                                if(S.size() == 0) {
                                    S.insert(num);
                                    mid = S.begin();
                                } 
                                else {
                                    S.insert(num);  
                                    if(S.size() % 2 == 0) {
                                        if(num < *mid) 
                                            mid--;
                                    } 
                                    else {
                                        if(num >= *mid) 
                                            mid++;
                                    }
                                }
                            }
                            
                            double findMedian() {
                                if(S.size() % 2 == 0) {
                                    auto midP = mid; 
                                    midP++;
                                    return (double)(*mid + *midP) / 2;
                                } 
                                else {
                                    return *mid;
                                }
                            }
                        };
                   `
                ,
                python:
                    `
                        class MedianFinder:
                            def __init__(self):
                                self.nums = []

                            def addNum(self, num: int):
                                bisect.insort(self.nums, num)

                            def findMedian(self) -> float:
                                n = len(self.nums)
                                if n % 2 == 0:
                                    return (self.nums[n // 2 - 1] + self.nums[n // 2]) / 2
                                else:
                                    return self.nums[n // 2]
                    `
                ,
                java:
                    `
                        class MedianFinder {
                            private PriorityQueue<Integer> lower;
                            private PriorityQueue<Integer> upper;

                            public MedianFinder() {
                                lower = new PriorityQueue<>(Collections.reverseOrder());
                                upper = new PriorityQueue<>();
                            }

                            public void addNum(int num) {
                                if (lower.isEmpty() || num <= lower.peek()) {
                                    lower.offer(num);
                                } else {
                                    upper.offer(num);
                                }

                                if (lower.size() > upper.size() + 1) {
                                    upper.offer(lower.poll());
                                } else if (upper.size() > lower.size()) {
                                    lower.offer(upper.poll());
                                }
                            }

                            public double findMedian() {
                                if (lower.size() == upper.size()) {
                                    return (lower.peek() + upper.peek()) / 2.0;
                                } else {
                                    return lower.peek();
                                }
                            }
                        }
                    `
            },
        }
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