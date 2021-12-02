package com.sonata;

public class ReplaceWithDollar {
		public static void main(String[] args) {
	        String str = "Program";
			char ch[]=str.toCharArray();
	        for (int i = 0; i < ch.length; i++)
	        {
	               if (ch[i]=='a'||ch[i]=='e'||ch[i]=='i'||ch[i]=='o'||ch[i]=='u')
	               {
	                ch[i]='$';
	               }   
	        }
	        for (int i = 0; i < ch.length; i++) {
	            System.out.print(ch[i]);
	        }
	    }
	}
