
export function filterExchanges(lista, name, trust_score) {
  let filtered=[...lista]
  if(name)
    filtered = filtered.filter(d=>d.name.toLowerCase().includes(name.toLowerCase()) )
  if(trust_score)
    filtered = filtered.filter(d=>d.trust_score > trust_score)
  return filtered


  
}

