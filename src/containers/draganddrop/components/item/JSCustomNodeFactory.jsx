import * as React from 'react';
import { JSCustomNodeModel } from './JSCustomNodeModel';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { Item } from './Item';

export class JSCustomNodeFactory extends AbstractReactFactory {
	constructor() {
		super('js-custom-node');
	}

	generateModel(event) {
		return new JSCustomNodeModel();
	}

	generateReactWidget(event) {
		return <Item 
			engine={this.engine} 
			node={event.model} 
			title={event.model.options.title} 
			output={event.model.options.output} 
			onDesc={true} 
			color={event.model.options.color || '#A5A7AB'} 
		/>;
	}
}