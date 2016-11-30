import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

const defaultProps = {
  title: 'Error',
};

const propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired,
};

class ErrorModal extends Component {
  componentDidMount() {
    const { title, message } = this.props;
    const modalMarkup = (
      <div
        id="error-modal"
        className="tiny reveal text-center"
        data-reveal=""
        ref={(c) => { this.node = c; }} >
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button
            className="button hollow"
            data-close=""
            aria-label="Close modal"
            type="button"
          >OK
          </button>
        </p>
      </div>
    );

    const $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(this.node).html($modal);
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    return (
      <div />
    );
  }
}

ErrorModal.defaultProps = defaultProps;
ErrorModal.propTypes = propTypes;

export default ErrorModal;
