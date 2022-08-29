const ESTYPE = 'number'| 'string' | 'array' | 'object' | 'symbol' | 'bigint' | 'undefined' | 'boolean'

const t = (o:any)=>{
  return Object.prototype.toString.call(o).split(' ')[1].replace(/\]/,'').toLocaleLowerCase() as unknown as ESTYPE
}
