export function BorderBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative p-[2px] w-full bg-[linear-gradient(200deg,hsla(0,0%,100%,1)_0%,hsla(0,84%,60%,1)_45%,hsla(258,85%,57%,1)_90%,hsla(243,55%,63%,1)_100%)] hover:scale-105 transition-all duration-500">
            {children}
        </div>
    )
}

