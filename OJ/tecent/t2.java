import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		while (in.hasNext()) {
			int N = in.nextInt();
			int left1 = -90;
			int right1 = 0;
			int left2 = 0;
			
			int right2 = 90;
			while (true) {
				if (N >= left2 && N <= right2) {
					left1 = left2;
					left2 = (left2 + right2) / 2;
					right1 = left2;
					System.out.print(1);
					if ((right2 - left2) + 1 <= 6){
						System.out.println(1);
						break;
					}
				}
				else if (N >= left1 && N < right1) {
					right2 = right1;
					right1 = (left1 + right1) / 2;
					left2 = right1;
					System.out.print(0);
					if (right1 - left1 <= 6){
						System.out.println(0);
						break;
					}
				}
				

			}

		}
	}
}
