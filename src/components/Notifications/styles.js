import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
`;
export const NotificationList = styled.div`
    position: absolute;
    left: calc(50% - 130px);
    width: 260px;
    top: calc(100% + 19px);
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    padding: 15px 5px;
    display: ${props => (props.visible ? 'block' : 'none')};
    &::before {
        content: '';
        position: absolute;
        left: calc(50% - 20px);
        top: -20px;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid rgba(0, 0, 0, 0.6);
    }
`;
export const Notification = styled.div``;
export const Badge = styled.button`
    background: none;
    border: 0;
    position: relative;
    ${props =>
        props.hasUnread &&
        css`
            &::after {
                position: absolute;
                right: 0;
                top: 0;
                width: 8px;
                height: 8px;
                background: #ff892e;
                content: '';
                border-radius: 50%;
            }
        `}
`;
