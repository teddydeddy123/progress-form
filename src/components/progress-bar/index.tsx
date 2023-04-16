import * as S from './styled'


type Props = {
    progress: number
}

export const ProgressBar = ({progress}: Props) => {
    return (
        <S.Wrapper>
            <S.Title>Lodgify Grouped Tasks</S.Title>
            <S.ProgressBarExternal>
                <S.ProgressBarInternal width={progress}>
                    <p>{progress}%</p>
                </S.ProgressBarInternal>
            </S.ProgressBarExternal>
        </S.Wrapper>
    )
}

export default ProgressBar;