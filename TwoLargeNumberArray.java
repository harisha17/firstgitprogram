package com.sonata;

public class TwoLargeNumberArray {
		public static void main (String[] args)
		{
		   int arr[] = {1,2,3,4,5,6,7,8};
		   int tmp;
	     	int largest1 = arr[0];
			int largest2 = arr[1];
	      if (largest1 < largest2)
			{
				tmp = largest1;
				largest1 = largest2;
				largest2 = tmp;
			}
	 
			for (int i = 2; i < arr.length; i++)
			{
				if (arr[i] > largest1)
				{
					largest2 = largest1;
					largest1 = arr[i];
				}
				else if (arr[i] > largest2 && arr[i] != largest1)
				{
					largest2 = arr[i];
				}
			}
	 
			System.out.println ("First largest is " + largest1);
			System.out.println ("Second largest is " + largest2);
	 
		}

	}
