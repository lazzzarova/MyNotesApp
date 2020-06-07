import React from 'react';

const styles = {
    backgroundColor: ' purple',
    height: '30px',
    width: '100%',
    position: 'fixed',
    bottom: 0
};

export function Footer() {
    return (
        <div className="footer" style={styles}>
            i'm just a footer boiii
       </div>
    );
}