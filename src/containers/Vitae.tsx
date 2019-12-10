import * as React from 'react';

import { connect } from 'react-redux';
import { AppState } from '../store/store';
import { DataArray } from '../store/reducer';

import SkillsItem from '../components/vitae/SkillsItem';
import Education from '../components/vitae/Education';
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
        return (
            <div className={styles.Container}>
                <div className={styles.Section}>
                    <div className={styles.Developer}>
                        <img
                            src={require('../images/photo.png')}
                            className={styles.Photo}
                            alt="a.kozlovtseva"
                        />
                        <p className={styles.Text}>Frontend developer</p>
                    </div>
                    <div className={styles.Skills}>
                        {this.props.data.skills.map((item, i) => (
                            <SkillsItem key={i} value={item} />
                        ))}
                    </div>
                </div>
                <div className={styles.Education}>
                    {this.props.data.education.map((item, i) => (
                        <Education key={i} item={item} />
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
