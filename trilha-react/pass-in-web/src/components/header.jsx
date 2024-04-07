import nwlUniteIcon from '../assets/nwl-unite-icon.svg'

export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={nwlUniteIcon} />
            <nav className='flex gap-5'>
                <a href="" className="font-medium text-smal text-zinc-300">Eventos</a>
                <a href="" className="font-medium text-smal">Participantes</a>
            </nav>
        </div>
    )
}