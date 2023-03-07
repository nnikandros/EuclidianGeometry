// Type unions are a way of declaring that an object
// could be more than one type.
interface Cartesian {
    x:number,
    y:number
}

interface Polar {
    r:number,
    theta: number
}

type CartToPolar = (point:Cartesian) => Polar
type PolartoCart = (point:Polar)=> Cartesian

type ChangeofCordinates<T,U>= (point:T)=> U



interface ITriangle {
    vertex0: Cartesian | Polar,
    vertex1: Cartesian | Polar ,
    vertex2:Cartesian| Polar ,
    isNonDegenerate(): boolean,
    isRight():boolean,
    isIsosceles():boolean,
    isEquilateral():boolean

}

class Triangle implements ITriangle{
    constructor(public vertex0:Cartesian | Polar , public vertex1:Cartesian| Polar, public vertex2: Cartesian|Polar){}
    
    isNonDegenerate():boolean {
        return true
    }

    isRight():boolean {
        return true
    }

    isIsosceles():boolean {
        return true
    }

    isEquilateral():boolean{
        return true
    } 
}
