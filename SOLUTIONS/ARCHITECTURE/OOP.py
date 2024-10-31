# Abstraction: focuses on providing the necessary detail or attributes of a class or object without revealing the complex or entire detail of it. Think of it like driving a car, you only need to know how to use the steering wheel, gear, gas pedal, and brakes to drive. You don’t need to understand how the engine works internally. In programming, abstraction helps you focus on what something does, not how it works inside.
class Car:
  def start_engine(self):
    print("Engine started") 
  
  def drive_car(self):
    print("Drive initiated")

# The user interacts with the car without knowing how the engine works
my_car = Car()
my_car.start_engine()
my_car.drive_car()


# Polymorphism: It is the multiplicity or iterable potential of a variable which allows it to exist in different in several instances where its method is called. This is called method overriding (when a child class has a method with the same name as a method in its parent class but provides its own implementation). It’s like how both cats and dogs make sounds, but each makes a different sound when you ask them to!
# Parent class
class Animal: 
  def sound(self):
    print("Some genric animal name")

# Child class Dog overriding that same pattern
class Dog: 
  def sound(self):
    print("bark!")

# Child class Cat overriding that same pattern
class Cat:
  def sound(self):
    print("meoww!")

# Creating instances of each class
my_Dog = Dog()
my_Cat = Cat()

# Calling the sound method 
print(my_Dog.sound()) # output: bark!
print(my_Cat.sound()) # output: meoww!
# This is polymorphism in action, different objects (Dog, Cat) responding to the same method (sound()) in different ways. It's a powerful tool that helps in creating flexible and easy-to-maintain code!


# Inheritance: the ability of an class or object to pass down its properties or attributes from a parent class to a child class. This allows for modularity in coding, allowing to build on existing code that you have written without starting from the scratch.
# Parent class
class Vehicle:
    def __init__(self, brand):
        self.brand = brand  # This is an attribute (brand)

    def start(self):
        print(f"{self.brand} vehicle started")  # This is a method

# Child class that inherits from Vehicle
class Car(Vehicle):
    def __init__(self, brand, model):
        super().__init__(brand)  # Inherit the brand from Vehicle (parent class)
        self.model = model  # Add a new attribute specific to Car

    def display_info(self):
        print(f"Car: {self.brand}, Model: {self.model}")

# Creating an object of the Car class
my_car = Car("IVM", "Ikenga")
my_car.start()  # Output: IVM vehicle started
my_car.display_info()  # Output: Car: IVM, Model: Ikenga


# Encapsulation: this bundles up a class' attributes and presents it to you via methods without exposing its details. This ensures that data is safe from unintended changes that could cause issues.
class Person: 
  def __init__(self, name, age):
    self.name = name 
    self.__age = age  # Private attribute (notice the double underscore)

  def get_age(self):
     return self.__age  # A method to access the private age attribute
# In this example, __age is kept private and we can only get the age attribute with the get_age() method
  

#  What is Method Overloading?
# Method overloading happens when you create multiple methods with the same name, but with different types of parameters inside the same class.While Python doesn't support traditional method overloading, you can mimic similar behavior by using default arguments/parameters or handling multiple arguments inside the method.

# Example 1: Using Default Parameters

class Calculator:
    def add(self, a, b=0, c=0):
        return a + b + c

# Create an instance of Calculator
calc = Calculator()

# Call the add method with different numbers of arguments
print(calc.add(5))        # Output: 5 (a = 5, b and c default to 0)
print(calc.add(5, 10))    # Output: 15 (a = 5, b = 10, c default to 0)
print(calc.add(5, 10, 15))# Output: 30 (a = 5, b = 10, c = 15)
# In this example, the add method has one required parameter (a) and two optional parameters (b and c) with default values of 0.


# By changing the number of arguments you pass when calling the method, you can achieve a method overloading effect.

# Example 2: Using *args for Dynamic Parameters

class Calculator:
    def add(self, *args):
        return sum(args)

# Create an instance of Calculator
calc = Calculator()

# Call the add method with different numbers of arguments
print(calc.add(5))           # Output: 5 (adds just one number)
print(calc.add(5, 10))       # Output: 15 (adds two numbers)
print(calc.add(5, 10, 15))   # Output: 30 (adds three numbers)
# In this example, the add method can handle any number of arguments thanks to *args, allowing you to call the method with one or more parameters. It sums up all the numbers passed to it.

# What is a Class in OOP?
# A class is like a template for making objects in programming. It outlines what properties (called attributes) and actions (called methods) the objects will have. Think of a class as a recipe that tells you how to create something, like a car.


# What is the Difference Between an Abstract Class and an Interface?
# An abstract class is a special type of class that you cannot create an object from. It can have both incomplete methods (called abstract methods) that don’t have any implementation, as well as fully implemented methods that do have code.

#An interface is like a contract that defines methods that must be implemented by any class that uses it. In Python, we achieve interfaces through abstract base classes (ABCs), which only contain abstract methods. They don’t have any implementation.


# What is a Static Method?
# This is a method that belongs to a class, not to an instance (object) of that class. Unlike other methods, static methods don’t need access to instance-specific data (attributes) or class-specific data.

# You can call a static method directly from the class without creating an object.

#Example:

class MathOperations:
    @staticmethod  # This tells Python it's a static method
    def add(a, b):
        return a + b

# We don't need to create an object of the class to use the static method
result = MathOperations.add(5, 3)
print(result)  # Output: 8
# In this example, @staticmethod is used to define the method as static. You can call MathOperations.add() directly using the class name, without creating an object of MathOperations.