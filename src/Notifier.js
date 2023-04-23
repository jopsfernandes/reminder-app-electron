const Notifier = {
    async init(){
        
        const permission = await Notification.requestPermission()
        if (permission !== "granted"){ throw new Error("Sem permissão!")}


    },

    notify({title, message, icon}){
        return () => new Notification(title,{
        message,
        icon
        })
    }
}

export {Notifier}