import { type ReactNode } from 'react'

type HintBoxProps = {
    mode: 'hint'
    severity?: 'low' | 'medium' | 'high'
    children: ReactNode
}
type WarningBoxProps = {
    mode: 'warning'
    severity: 'low' | 'medium' | 'high'
    children: ReactNode
}

type InfoBoxProps = HintBoxProps | WarningBoxProps

export const InfoBox = (props: InfoBoxProps) => {
    const { children, mode } = props
    if (mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        )
    }
    const { severity } = props
    return (
        <aside className={`infobox infobox-warning warning--${severity ? severity : 'medium'}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}