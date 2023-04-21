#the ultimate fitness calculator

#make a program to calculate BMI
#make a program to calculate bmr
#make a program to calculate tdee
#make a program to calculate calories needed to lose weight
#make a program to calculate calories needed to gain weight
#make a program to calculate calories needed to maintain weight

#formula for BMI: weight in kg / height in meters squared
#formula for bmr: 10 x weight in kg + 6.25 x height in cm - 5 x age in years
#formula for tdee: bmr x activity level
#formula for calories needed to lose weight: tdee - 500
#formula for calories needed to gain weight: tdee + 500
#formula for calories needed to maintain weight: tdee
#activity level: sedentary = 1.2, lightly active = 1.375, moderately active = 1.55, very active = 1.725, extra active = 1.9

def againcalc():
    againcalcu=input("Do you want to calculate again? y/n: ")
    print("----------------------------------------")
    if againcalcu== "y":
        print("Sure, let's do it again")
        print("----------------------------------------")
        calc()
    elif againcalcu== "n":
        print("Goodbye, See You on The Other Side!")
        print("----------------------------------------")
    else:
        print("Invalid input, choose a wise one next time")
        print("----------------------------------------")

def calc():
    cal=input("Choose a number:\n 1 for BMI,\n 2 for bmr,\n 3 for tdee,\n 4 for calories needed to lose weight,\n 5 for calories needed to gain weight,\n 6 for calories needed to maintain weight \n 7. for calculating everything from bmi and activity level\n Enter your choice: ")
    if cal== "1":
        weight=int(input("What is your weight in kg?"))
        height=int(input("What is your height in meters?"))
        bmi=weight/height**2
        print("Your BMI is", bmi)
        againcalc()
        
    elif cal== "2":
        weight=int(input("What is your weight in kg?"))
        height=int(input("What is your height in cm?"))
        age=int(input("What is your age in years?"))
        bmr=10*weight+6.25*height-5*age
        print("Your bmr is", bmr)
        againcalc()
        
    elif cal== "3":
        weight=int(input("What is your weight in kg?"))
        height=int(input("What is your height in cm?"))
        age=int(input("What is your age in years?"))
        bmr=10*weight+6.25*height-5*age
        activity=int(input("What is your activity level? Sedentary = 1.2, lightly active = 1.375, moderately active = 1.55, very active = 1.725, extra active = 1.9"))
        tdee=bmr*activity
        print("Your tdee is", tdee)
        againcalc()
        
    elif cal== "4":
        weight=int(input("What is your weight in kg?"))
        height=int(input("What is your height in cm?"))
        age=int(input("What is your age in years?"))
        bmr=10*weight+6.25*height-5*age
        activity=int(input("What is your activity level? Sedentary = 1.2, lightly active = 1.375, moderately active = 1.55, very active = 1.725, extra active = 1.9"))
        tdee=bmr*activity
        lose=tdee-500
        print("You need", lose, "calories to lose weight")
        againcalc()
        
    elif cal== "5":
        weight=int(input("What is your weight in kg?"))
        height=int(input("What is your height in cm?"))
        age=int(input("What is your age in years?"))
        bmr=10*weight+6.25*height-5*age
        activity=int(input("What is your activity level? Sedentary = 1.2, lightly active = 1.375, moderately active = 1.55, very active = 1.725, extra active = 1.9"))
        tdee=bmr*activity
        gain=tdee+500
        print("You need", gain, "calories to gain weight")
        againcalc()
        
    elif cal== "6":
        weight=int(input("What is your weight in kg?"))
        height=int(input("What is your height in cm?"))
        age=int(input("What is your age in years?"))
        bmr=10*weight+6.25*height-5*age
        activity=int(input("What is your activity level? Sedentary = 1.2, lightly active = 1.375, moderately active = 1.55, very active = 1.725, extra active = 1.9"))
        tdee=bmr*activity
        print("You need", tdee, "calories to maintain weight")
        againcalc()
        
    elif cal== "7":
        weight=int(input("what is your weight in kg?"))
        height=int(input("what is your height in cm?"))
        age=int(input("what is your age in years?"))
        cmheight=height/100
        bmi=weight/cmheight**2
        bmr=10*weight+6.25*height-5*age
        activity=int(input("What is your activity level? Sedentary = 1.2, lightly active = 1.375, moderately active = 1.55, very active = 1.725, extra active = 1.9"))
        tdee=bmr*activity
        lose=tdee-500
        gain=tdee+500
        print("Your BMI is", bmi)
        print("Your bmr is", bmr)
        print("Your tdee is", tdee)
        print("You need", lose, "calories to lose weight")
        print("You need", gain, "calories to gain weight")
        print("You need", tdee, "calories to maintain weight")
        againcalc()
        
    else:
        print("Invalid number, choose a wise one next time")

calc()
