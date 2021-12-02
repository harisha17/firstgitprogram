package com.sonata;

public class Reverse {
	 public static void main(String[] args)
	 { 
	        int arr[] ={10,11,12,13,14,15};  
	        System.out.println("Present: ");  
	        for (int i = 0; i < arr.length; i++)
	        {  
	            System.out.print(arr[i] + " ");  
	        }  
	        System.out.println();  
	        System.out.println("Reverse: ");    
	        for(int i = arr.length-1; i >= 0; i--)
	        {  
	            System.out.print(arr[i] + " ");  
	        }  
	 }

}
