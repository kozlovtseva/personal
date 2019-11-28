import * as React from 'react';

import { connect } from 'react-redux';
import { AppState } from '../store/store';
import { DataArray } from '../store/reducer';

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
        return <div>Резюме</div>;
    }
}

const mapStateToProps = (store: AppState) => {
    return {
        data: store.vitae.data,
    };
};

export default connect(mapStateToProps)(Vitae);
