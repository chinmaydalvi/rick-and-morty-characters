import React from 'react';
import { Dispatch } from 'redux';
import {connect} from "react-redux";
import scss from './CharList.module.scss';
import {fetchCharList} from "../../actions/char-list.actions";
import {ICharacters} from "../../states/char-list.state";

interface ICharListProps {
	characters: ICharacters;
	fetchCharList: (pageNo: number) => void;
}

class CharList extends React.Component<ICharListProps>{
	private lastScrollTop:number = 0;
	public constructor(props: any){
		super(props);
		this.fetchCharacterListOnScroll = this.fetchCharacterListOnScroll.bind(this);
		this.displayCharacterList = this.displayCharacterList.bind(this);
	}

	public componentDidMount(): void {
		this.props.fetchCharList(1);
		this.fetchCharacterListOnScroll();
	}




	public fetchCharacterListOnScroll():void{
		window.onscroll = (event:any) => {
			const st = window.pageYOffset || document.documentElement.scrollTop;
			const {currentPage, totalPages} = this.props.characters;
			if (st > this.lastScrollTop && currentPage < totalPages && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
				this.props.fetchCharList(this.props.characters.currentPage + 1);
			}
			this.lastScrollTop = st <= 0 ? 0 : st;
		};
	}


	public displayCharacterList():JSX.Element[]{
		return this.props.characters.charList.map((cInfo, index)=>{
			return <div key={index} className={scss.charInfo}>{JSON.stringify(cInfo)}</div>
		});
	}


	public render():JSX.Element{
		return (
				<>
					<div className={scss.charList}>CharList</div>
					{this.displayCharacterList()}
				</>
		);
	}
}

const mapStateToProps = (state: any, props: any) => {
	return {
		...props,
		characters: state.characters,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		fetchCharList: (pageNo: number = 1) => dispatch(fetchCharList(pageNo)),
	};
};
export default connect(
		mapStateToProps,
		mapDispatchToProps,
)(CharList);
