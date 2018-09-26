import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import { getDownload } from '../../api'
import { downloadFile } from '../../utils'
import Toast from '../../components/toast/toast'

import { MOCK } from '../../mocks';

const getDownloadByType = (type) => {
  const types = {
    noZipcode: 1,
    verticalWithoutEnterprise: 2
  }
  return types[type] || null;
}


const validInfo = (type) =>
  !['totalPhoto', 'averagePhotos', 'enterpriseWithPhotos', 'enterpriseWithArchives', 'owners', 'interested', 'propertiesWithPhotos', 'propertiesWithArchives'].includes(type)


class WidgetItem extends Component {
  constructor(props) {
    super(props);

    this.handleDownload = this.handleDownload.bind(this);
  }

  handleDownload = (e, param) => {
    e.preventDefault();
    const downloadType = getDownloadByType(param);

    if (MOCK)
      return Toast.success({ message: 'Download realizado!' });

    if (!MOCK)
      getDownload(downloadType)
        .then(( response ) => {
          downloadFile(response.data, response.headers.filename)
        })
        .catch((error) => {
          console.error(error);
        })
  }

  renderContent = () => {
    return (
      <div className='list-group-item list-group-item-action d-flex justify-content-between align-items-center' id={this.props.id}>
        {this.props.name}
        <div className="box-info">
          {!!this.props.download && <a onClick={(e) => this.handleDownload(e, this.props.id)} className='link-download' data-tip='Faça o Download'>
            <ReactTooltip place="bottom" type="dark" effect="solid" />
            <i className="ing ing-download"></i>
          </a>}
          {!this.props.value && validInfo(this.props.id) ? (<i className="ing ing-thumb-up-o color-green-3 mr-1"></i>) : (<span className={`badge badge-pill ${validInfo(this.props.id) ? 'bg-red-2' : 'bg-green-3'}`}>{this.props.value}</span>)}

        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={`col-12 ${this.props.cols}`}>
        {this.renderContent()}
      </div>
    )
  }
}

export { WidgetItem };
