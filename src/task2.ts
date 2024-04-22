import { Observable } from './observable';
import { ToastProps } from "./components/Toast"


type Events={
    type: 'ADD TOAST' |"REMOVE ALL"
    toast?:Pick <ToastProps, 'id' | "message"|"variant">
}

export const observable= new Observable<Events>();
observable.subscribe((data)=>{

})
export function toast(message:string){
    observable.notify({type: 'ADD TOAST', toast:{id:Math.random(),message}})
}
toast.success=(message:string)=>{
    observable.notify({type: 'ADD TOAST', toast:{id:Math.random(),message,variant:"success"}})
}
toast.error=(message:string)=>{
    observable.notify({type: 'ADD TOAST', toast:{id:Math.random(),message,variant:"error"}})
}
toast.dismissAll=()=>{
    observable.notify({type: "REMOVE ALL"})
}