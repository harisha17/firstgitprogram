package com.sonata;
public class Highestdpcount {
		 public void MaxRepeatingElement(int [] arrayA){
			 int MaxCounter = 0;
			 int ele=0;
		    for (int i = 0; i <arrayA.length ; i++) {
				 int count =1;
				 for (int j = i+1; j <arrayA.length ; j++) {
					 if(arrayA[i]==arrayA[j]){
						 count++;
					 }
				 }
				 if(MaxCounter<count){
					 MaxCounter=count;
					 ele = arrayA[i];
				 }
			 }
		 System.out.println("Repeating no of times: " + ele + ", max count: " + MaxCounter);
		 }

		 public static void main(String[] args) {
			 int [] arrayA = {4, 1, 5, 2, 1, 5, 9, 8, 6, 5, 3, 2, 4, 7};
			 Highestdpcount m = new Highestdpcount();
			 m.MaxRepeatingElement(arrayA);
		}
	}

