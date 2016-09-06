import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
			Scanner in = new Scanner(System.in);
			long temp = 0;
			long sum = 0;
			boolean b = true;
			int min = Integer.MIN_VALUE;
			int n = in.nextInt();
			int[] a = new int[n];
			for (int i = 0; i < n; i++)
				a[i] = in.nextInt();
			for (int i = 0; i < a.length; i++) {
				if(a[i]>0)
					b = false;
				if (a[i] > min)
					min = a[i];
				if (temp < 0)
					temp = a[i];
				else {
					temp += a[i];
				}
				if (temp > sum)
					sum = temp;
			}
			if (b == false)
				System.out.println(sum);
			else
				System.out.println(min);
	}
}