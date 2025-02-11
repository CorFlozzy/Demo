#funcione en python
def holamundo ():
    print("hola mundo desde una funcion")

holamundo()

print("---------------------")
def saludano(name):
    print("Hola", name)

saludano("miguel")
saludano("angel")

print("---------------------")

def suma(num1, num2,num3):
    rest=num1+num2+num3
    print("la suma de los dos valores es",rest)

suma(1,2,4)

print("---------------------")

def sumas(num1=12,num2=31):
    print("llamando a una funcion dentro de otra")
    suma(20,20,20)
    return num1+num2


print(sumas())
print("---------------------")
