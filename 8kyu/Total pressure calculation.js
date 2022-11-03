// Description: Calculate the total pressure based on the formula



solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  // your code goes here
  gas =  0.082;
  
  tempKelvin = temp + 273.15 ;
  
  return ((givenMass1 / molarMass1 + givenMass2 / molarMass2) * gas * tempKelvin ) / volume;
}

// Other solution

solution=(m1,m2,M1,M2,v,t)=>(M1/m1+M2/m2)*0.082*(t+273.15)/v