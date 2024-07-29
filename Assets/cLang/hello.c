#include<stdio.h>
int a, b;
int main(){
  printf("Enter a: ");
  scanf("%d", &a);
  printf("Enter b: ");
  scanf("%d", &b);

  int sum = a + b;
  printf("Sum of %d + %d = %d", a, b, sum);
  return 0;
}