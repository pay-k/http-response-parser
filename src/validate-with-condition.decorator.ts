import {registerDecorator, ValidationOptions, ValidationArguments} from "class-validator";

export function ValidateWithCondition(condition: (object: any, value: any) => boolean, validationOptions?: ValidationOptions) {
   return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "ValidateWithCondition",
            target: object.constructor,
            propertyName,
            constraints: [condition],
            options: { message: 'Failed passing the ValidateWithCondition Test', ...validationOptions },
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [conditionalFn] = args.constraints;
                    return conditionalFn(args.object as any, value as any);
                },
            },
        });
   };
}