# num = 14
# while num >0:
#     if num%2 ==0:
#         num = num/2
#     else:
#         num = num -1
# print(num)



accounts = [[1,5],[7,3],[3,5]]
a = 0
li1 =[]
for i in accounts:
    print(i)
    a= sum(i)
    print(a)    
    li1.append(a)
print(max(li1))


n = 15
li=[]
for i in range(1,n+1):
    if i%3==0 and i%5==0:
        li.append('FizzBuzz')
    elif i%3==0:
        li.append('Fizz')
    elif i%5==0:
        li.append('Buzz')
    else:
        li.append(i)
print(li)