import * as s from '../../static/styled';

export default function Login({fisrtBtnText, secondBtnText}){
    return(
        <s.FullView>
            <s.DefaultButton>{fisrtBtnText}</s.DefaultButton>
            <s.DefaultButton>{secondBtnText}</s.DefaultButton>
        </s.FullView>
    )
}