#include <stdio.h>
#include <stdlib.h>
#include <math.h>

float PILeibniz(int iterations);

int main()
{
    printf("PI approximation %Lf\n", PILeibniz(1000000));
    return 0;
}

float PILeibniz(int iterations){
    double s = 0;

    for(int n = 0; n<iterations; n++){
        s += pow(-1, n) /(2*n + 1);
    }
    return s * 4;
}
