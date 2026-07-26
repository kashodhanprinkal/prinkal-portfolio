export default function HighLightText({text, className=""}){
    return(
        <span className={`font-mono text-foreground bg-gradient-to-r from-blue-500/20 to-purple-500/20 py-0.5 rounded ${className}`}>
            {text}
        </span>
    )
}