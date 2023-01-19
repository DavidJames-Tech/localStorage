import fs from "fs"

function getItem(key : LSKey) : LSValue {
    let data: LSValue = null;
    let status: STATUS;

    function __fetch(index: number){

        if(status === 0) return;

        let reg = new RegExp(`\"\<(?<key>${key}), (?<value>{.+?})>`)
        fs.createReadStream('./.133localStorage-vnoa4903cc/.local.x', 'utf8')
        .on('data', (ch)=> {
            console.log(JSON.parse(reg.exec(ch.toString()).groups?.value.toString().replace(/[\\//]+/g, "")))
            status = 0

            __fetch(++index)
        })
    }

    __fetch(0)

    return data

    
}

function setItem(key: LSKey, value: LSValue){
    //Check if record exist?
    fs.createReadStream('./.133localStorage-vnoa4903cc/.local.x')
    .on('data', (ch)=> {
        let match: unknown;
        console.log(ch.toString().match(new RegExp(`\"\<${key},`)))
        if(match = new RegExp(`\"\<${key},`).exec(ch.toString())){
            
            console.log("Exists...")

            let str = ch.toString().replace(/[\\//]+/g, "")
            console.log(str)

            // console.log(new RegExp(`\<${key}, (?<value>{.+?})\>`).exec(str))

            str = str.replace(new RegExp(`\<${key}, (?<value>{.+?})\>`), `<${key}, ${value}>`)

            

            fs.writeFile('./.133localStorage-vnoa4903cc/.local.x', str, (err)=> {
                if(err) throw err;
            })


        } else {
            fs.appendFile('./.133localStorage-vnoa4903cc/.local.x', JSON.stringify(`<${key}, ${value}>`), (error)=> {
                if(error) throw error;
            })
        }
    })


   
}

function log() : LSLog {
    return ''
}

export { getItem, setItem, log }