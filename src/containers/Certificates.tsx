import React from 'react';

import { connect } from 'react-redux';
import { GetCertificates } from '../store/actions';
import { AppState } from '../store/store';
import { CertificatesArray } from '../store/reducers/certificatesReducer';

// import CertificatesItem from '../components/certificates/CertificatesItem';

// import styles from './Certificates.module.scss';

interface PropsFromState {
    data: CertificatesArray;
}

interface PropsFromDispatch {
    GetCertificates: typeof GetCertificates;
}

type AllProps = PropsFromState & PropsFromDispatch;

class Certificates extends React.Component<AllProps> {
    static defaultProps = { GetCertificates: undefined };

    componentDidMount() {
        const { GetCertificates: gc } = this.props;
        gc();
    }

    render() {
        console.log(this.props.data);
        return (
            // <div className={styles.Container}>
            //     {this.props.data.map((item, i) => (
            //         <CertificatesItem key={i} item={item} />
            //     ))}
            // </div>
            <div />
        );
    }
}

const mapStateToProps = (store: AppState) => {
    return {
        data: store.certificates.data,
    };
};

const mapDispatchToProps = {
    GetCertificates,
};

export default connect(mapStateToProps, mapDispatchToProps)(Certificates);
