# Class Validator Extras

## Install
```
npm install @payk/class-validator-extras
```

## Usage

### ValidateWithCondition
The decorator needs to define a function that receives two values, an object of the current class and the value of the current property. It needs to return a boolean.
You can also pass the options object and override the message for your usage.
```ts
class MyClass {

    startDate: Date;

    @ValidateWithCondition((obj: MyClass, val: Date) => val > obj.startDate, { message: 'ExpirationDate must be after the StartDate' })
    expirationDate: Date;
}
```