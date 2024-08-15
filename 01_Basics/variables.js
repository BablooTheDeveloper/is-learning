const accountID = 12202130601027
let accountType = "Savings"
var accountPassword = "Izhan$2786"
accountState = "professional.mi12@gmail.com"

// "const" is used to define variables that can not be reinitialized

// "let" is used to define variables that can be reinitialized

// "var" is not used nowadays

// In JS we can define a variable without any var_type.

// In JS ";" is not necessary.

// ByDefault value of any unInitialized variable is "undefined".

console.log(accountID)
console.log(accountPassword)
console.log(accountType)
console.log(accountState)

// accountID = 12202130601049 --> not allowed
accountType = "Current"
accountPassword = "Izh@n2786"
accountState = "pcofmi2786@gmail.com"

console.table([accountID, accountPassword, accountType, accountState])