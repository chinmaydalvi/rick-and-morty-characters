import React from "react";
import "./CardDesign.scss";
import {ICharacters, ICharInfo} from "../../states/char-list.state";
import {charInfo} from "../CharList/CharList.scss";

interface ICardDesignProps {
	characters: ICharacters
}
export class CardDesign extends React.Component<ICardDesignProps>{
	constructor(props:any) {
		super(props);
		this.showDetails = this.showDetails.bind(this);
		this.cardBox = this.cardBox.bind(this);
	}


	public showDetails(event: any){
			const card = event.currentTarget.closest('.material-card');
			const icon = event.currentTarget.querySelector('i');
			icon.classList.add('fa-spin-fast');

			if (card.classList.contains('mc-active')) {
				card.classList.remove('mc-active');

				setTimeout(() => {
						icon.classList.remove('fa-arrow-left');
						icon.classList.remove('fa-spin-fast');
						icon.classList.add('fa-bars');
				}, 800);
			} else {
				card.classList.add('mc-active');

				setTimeout(() => {
						icon.classList.remove('fa-bars');
						icon.classList.remove('fa-spin-fast');
						icon.classList.add('fa-arrow-left');
				}, 800);
			}
	}

	public cardBox(charInfo: ICharInfo){
		return(
				<div className="col-md-4 col-sm-6 col-xs-12" key={charInfo.id}>
					<article className="material-card Red">
						<h2>
							<span className="name">{charInfo.name}</span>
							<strong>
								<span className="charId"><i className="fa fa-fw fa-star"/>ID: #{charInfo.id}</span>
								<span className="status"><i className={`fa fa-circle ${charInfo.status.toLowerCase()} `} aria-hidden="true" />{charInfo.status}</span>
							</strong>
						</h2>
						<div className="mc-content">
							<div className="img-container">
								<img className="img-responsive" alt={'character name'} src={charInfo.image} />
							</div>
							<div className="mc-description">
								He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ...
							</div>
						</div>
						<a className="mc-btn-action" onClick={this.showDetails}><i className="fa fa-bars" /></a>
						<div className="mc-footer">
							<h4>Social</h4>
							<a className="fa fa-fw fa-facebook" />
							<a className="fa fa-fw fa-twitter" />
							<a className="fa fa-fw fa-linkedin" />
							<a className="fa fa-fw fa-google-plus" />
						</div>
					</article>
				</div>
		)
	}

	public render(){
		return(
			<section className="container">
				<div className="row active-with-click">
					{this.props.characters.charList.map((charInfo: ICharInfo)=>{
						return this.cardBox(charInfo)
					})}
				</div>
			</section>
		)
	}
}
