import React from 'react';

import styles from './Button.module.scss';

interface Props {
    classesNames: string;
    href: string;
    text: string;
}

const Button = (props: Props) => {
    let assignedClasses: string[] = [];
    if (props.classesNames) {
        assignedClasses = props.classesNames.split(' ');
    }
    assignedClasses.push('Modal');
    return (
        <div className={styles.ButtonBlock}>
            <a
                href={props.href}
                target="_blank"
                rel="noreferrer noopener"
                className={assignedClasses.map(el => styles[el]).join(' ')}
            >
                {props.text}
            </a>
        </div>
    );
};

export default Button;
