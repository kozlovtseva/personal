import * as React from 'react';

import { connect } from 'react-redux';
import { AppState } from '../store/store';
import { DataArray } from '../store/reducer';

import SkillsItem from '../components/SkillsItem';
import styles from './Vitae.module.scss';

interface Props {
    data: DataArray;
}
// type State = {

// };

class Vitae extends React.Component<Props> {
    // state: State = {

    // };
    render() {
        console.log(this.props.data);
        return (
            <div>
                <div className={styles.Person}>
                    <p className={styles.Text}>Frontend developer</p>
                    <div className={styles.Back}>
                        <img
                            src={require('../images/photo.png')}
                            className={styles.Photo}
                            alt="a.kozlovtseva"
                        />
                    </div>
                </div>
                <div className={styles.Skills}>
                    {this.props.data.skills.map((item, i) => (
                        <SkillsItem key={i} value={item} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store: AppState) => {
    return {
        data: store.vitae.data,
    };
};

export default connect(mapStateToProps)(Vitae);
