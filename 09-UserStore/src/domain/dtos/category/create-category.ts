



export class CreateCategoryDto {

    private constructor(
        public readonly name: string,
        public readonly avalaible: boolean,

    ) {}

    static create(object: {[key: string]: any } ):[string?, CreateCategoryDto?]{

        const {name, avalaible = false} = object;
        let avalaibleBoolean = avalaible;

        if (!name ) return ['Missing name'];
        if( typeof avalaible !== 'boolean'){
            avalaibleBoolean = ( avalaible === 'true')
        } 

        return [undefined, new CreateCategoryDto(name, avalaibleBoolean)];
    }

}