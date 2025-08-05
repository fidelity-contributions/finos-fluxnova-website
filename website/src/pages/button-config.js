import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';

export const buttons = [
    {
        name: <>Get Started</>,
        url: '',
        style: (classnames(
            'button button--outline button--secondary button--lg',
            styles.button,
            styles.getStartedButton
        ))
    },
    {
        name: <>Join the Community</>,
        url: '',
        style: (classnames(
            'button button--outline button--secondary button--lg',
            styles.button,
            styles.joinCommunityButton
        ))
    },
];