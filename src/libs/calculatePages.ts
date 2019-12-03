export function pagination(page:number , quant: number) { 

  const left = page - 2;
  const right = page + 2;
  const range =  [];

  if((page <=3) || ((page <=5) && (quant <= 5))) {
    const maxPage = quant<=5? quant : 5;
    for(let i = 1; i<=maxPage; i++) {
      range.push(i);
    }
    if(quant>5) {
      range.push("...");
    }
  }

  if((page >= (quant-2)) && (quant>5)) {
    range.push("...");
    for(let i = (quant-4); i<= quant; i++) {
      range.push(i);
    }
  }

  if((page>3) && (page <= (quant-3))) {
    const arrayPags = Array.from(Array((Math.ceil(quant || 0 ))).keys());
    range.push("...");
    // eslint-disable-next-line
    arrayPags.map((index) => {
      if((index+1) >= left && (index+1) <= right) {
        range.push(index+1);
      }
    });
    range.push("...");
  }
  return range;
}