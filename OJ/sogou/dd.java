import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class TreeNode {
int val;
List<TreeNode> list = new ArrayList<TreeNode>();

TreeNode(int val) {
this.val = val;
}
}

class t {
int x;

t(int x) {
this.x = x;
}
}

public class Main {
static void fun1(t tt) {
tt.x = 5;
}

public static boolean isPrime(int a) {
boolean flag = true;
if (a < 2) {
return false;
} else {
for (int i = 2; i <= Math.sqrt(a); i++) {
if (a % i == 0) {
flag = false;
break;
}
}
}
return flag;
}
public static BigInteger re(int x,int y){
int sum=0;
BigInteger b= BigInteger.ZERO;
for(int i=x+1;i<y;i++){
if(isPrime(i)){
//BigInteger temp = new BigInteger(String.valueOf(i));
//System.out.println(temp);
b=b.add(BigInteger.ONE);
//System.out.println(b);
}
//sum++;
}
return b;
}
public static void main(String[] args) {

Scanner in = new Scanner(System.in);
while (in.hasNext()) {
BigInteger sum= new BigInteger("0");
int n = in.nextInt();
int[] a = new int[n];
for (int i = 0; i < n; i++)
a[i] = in.nextInt();
//long sum =0;
for(int i=0;i<n-1;i++){
for(int j=i+1;j<n;j++){
sum=sum.add(re(a[i],a[j]));
//sum+=re(a[i],a[j]);
}
}
System.out.println(sum);
}

}
