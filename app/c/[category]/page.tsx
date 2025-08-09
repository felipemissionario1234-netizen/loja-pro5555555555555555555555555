import products from '../../data/products.json'
import Link from 'next/link'
export default function Category({params}:{params:{category:string}}){
  const list=params.category==='todos'?products:products.filter(p=>p.category===params.category)
  return(<section className="container py-8">
    <h2 className="text-2xl font-extrabold mb-4">Categoria: {params.category}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {list.map(p=>(
        <Link key={p.slug} href={`/p/${p.slug}`} className="card">
          <img src={p.image} alt={p.name} className="rounded-xl aspect-square object-cover mb-2"/>
          <div className="text-sm text-neutral-500">{p.brand}</div>
          <div className="font-bold">{p.name}</div>
          <div className="text-orange-700 font-extrabold">R$ {p.price.toFixed(2)}</div>
        </Link>
      ))}
    </div>
  </section>)}
