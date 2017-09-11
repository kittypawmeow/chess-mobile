/**
 * 
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class chessmobile extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Chessboard/>
				<Pieces/>
			</View>
		);
	}
}

var ChessRow1 = React.createClass({
	render: function() {
		return (
			<View style={styles.row}>
				<View style={styles.black_square}/>
				<View style={styles.white_square}/>
				<View style={styles.black_square}/>
				<View style={styles.white_square}/>
				<View style={styles.black_square}/>
				<View style={styles.white_square}/>
				<View style={styles.black_square}/>
				<View style={styles.white_square}/>
			</View>
		)
	}
});

var ChessRow2 = React.createClass({
	render: function() {
		return (
			<View style={styles.row}>
				<View style={styles.white_square}/>
				<View style={styles.black_square}/>
				<View style={styles.white_square}/>
				<View style={styles.black_square}/>
				<View style={styles.white_square}/>
				<View style={styles.black_square}/>
				<View style={styles.white_square}/>
				<View style={styles.black_square}/>
			</View>
		)
	}
});

var Chessboard = React.createClass({
	render: function() {
		return (
			<View>
					<ChessRow1/>
					<ChessRow2/>
					<ChessRow1/>
					<ChessRow2/>
					<ChessRow1/>
					<ChessRow2/>
					<ChessRow1/>
					<ChessRow2/>
			</View>
		)
	}
});

var Pieces = React.createClass({
	render: function() {
		return (
			<View style={styles.row}>
				<Pawn/>
				<Pawn/>
				<Pawn/>
				<Pawn/>
				<Pawn/>
				<Pawn/>
				<Pawn/>
				<Pawn/>
			</View>
		);
	}
});

var Pawn = React.createClass({
	render: function() {
		return (
			<View>
				<View style={components.pawn_top}>
					<View style={pawn_head('black')}/>
					<View style={pawn_body('black')}/>
				</View>
			</View>
		)
	}
});

var pawn_head = function(c) {
	return {
		top: 5,
		width: 10,
		height: 10,
		borderRadius: 100 / 2,
		backgroundColor: c,
	}
}

var pawn_body = function(c) {
	return {
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderLeftWidth: 10,
		borderRightWidth: 10,
		borderBottomWidth: 20,
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		borderBottomColor: c
	}
}

const components = StyleSheet.create({
	pawn_top: {
		width: 20,
		height: 20,
		alignItems: 'center',
	},
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#999999',
	},
	row: {
		flexDirection: 'row',
		height: 50,
	},
	black_square: {
		width: 50,
		height: 50,
		backgroundColor: 'black'
	},
	white_square: {
		width: 50,
		height: 50,
		backgroundColor: 'white'
	},
});

AppRegistry.registerComponent('chessmobile', () => chessmobile);
