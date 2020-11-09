import React from 'react';


function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
             <div className="row">
                <div className="col text-center">
                    <h5>Public Repository</h5>
                    <a className="btn btn-icon btn-github" href="https://github.com/Hel5Sou/ToDo-List" target='_blank' aria-label='GitHub'>
                    <i className="fa fa-github" />    
                    </a>{' GitHub'}
                </div>
              </div>  
            </div>
        </footer>
    );
}

export default Footer;