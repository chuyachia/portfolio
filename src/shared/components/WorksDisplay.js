'use strict';
require('es6-promise').polyfill();

import axios from 'axios';
import Card from './Card.js';
import {DotLoader} from 'react-spinners';
import orderBy from "lodash.orderby";
import React from 'react';
import 	Prismic from 'prismic-javascript';
import {Link, RichText, } from 'prismic-reactjs';


class WorksDisplay extends React.Component {
    constructor(){
        super();
        this.state = {
            doc:null,
            error:null
        };
    }
    linkResolver(doc) {
      return '/';
    }
    componentWillMount(){
        const apiEndpoint = 'https://portfolio-chuya.cdn.prismic.io/api/v2';
        Prismic.api(apiEndpoint).then(api => {
            api.query(
                Prismic.Predicates.at('my.project.type', this.props.type),
                { orderings : '[document.last_publication_date desc]' }
            ).then(response => {
              if (response) {
                this.setState({ doc: response.results});
              }
            });
        });

    }
    createCards(){
        return this.state.doc.map(function(d,i){
            const data = d.data;
            return <Card url_app= {data.app_url.url} 
            url_code= {data.code_url.url} 
            img = {data.image.url} 
            title={data.title} 
            desc={RichText.asText(data.description)} 
            key = {i} 
            techs = {data.tech_stack} />;
        });
    }
    
    render(){
        if (this.state.doc) {
            return(
                <div class="work-display-wrap" style={{backgroundColor:this.props.type=='web'?"#1a1a1a":"#fff"}}>
                    <div onClick={this.props.back} class="circle-icon back" style={{
                        color:this.props.type=='web'?"#919aa1":"#fff",
                        backgroundColor:this.props.type=='web'?"#fff":"#1a1a1a",
                    }}>
                        <i class="fas fa-angle-left"/>
                    </div>
    
                    <div class="container">
                        <div class="work-display">
                            {this.state.error&&<p>{this.state.error}</p>}
                            {this.createCards()}
                        </div>
                    </div>
                </div>
            );
        }
        return(
        <div class="work-display-wrap" style={{backgroundColor:this.props.type=='web'?"#1a1a1a":"#fff"}}>
            <div class='loader'>
                <DotLoader
                color={'#919aa1'} 
                loading={true} 
                />
            </div>
        </div>
        );
    }
}

export default WorksDisplay;