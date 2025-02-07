import { Validators } from "../../../config";



export class CreateProductDto {

    private constructor(

        public readonly name: string,
        public readonly avalaible: boolean,
        public readonly price: number,
        public readonly description: string,
        public readonly user: string,
        public readonly category: string,
    ){}

    static create( props: { [key:string]:any}): [string?, CreateProductDto?]{

        const {
            name,
            avalaible,
            price,
            description,
            user,
            category,
        } = props;

        if ( !name ) return ['Missing name'];

        if ( !user ) return ['Missing user'];
        if ( !Validators.isMongoId(user)) return ['Invalid User ID']

        if ( !Validators.isMongoId(category)) return ['Invalid User ID']
        if ( !category ) return ['Missing category'];

        return [ undefined, 
            new CreateProductDto(
                name,
                !!avalaible,
                price,
                description,
                user,
                category,
            )
        ]





    }


}