import React from "react";
import "./CardDesign.scss";
import {ICharacters, ICharInfo} from "../../states/char-list.state";
import {timeSince} from "../../common/utils";

interface ICardDesignProps {
	sortBy: string;
	characters: ICharacters
}
export class CardDesign extends React.PureComponent<ICardDesignProps>{
	constructor(props:any) {
		super(props);
		this.cardBox = this.cardBox.bind(this);
	}

	public cardBox(charInfo: ICharInfo){
		return(
				<div className="col-lg-3 col-md-3 col-sm-3 col-6 cartDesignGrid" key={charInfo.id}>
					<article className="cartDesign">
						<div className={"charName p-2"}>
							<div className="name">{charInfo.name}</div>
							<strong>
								<span className="charId"><i className="fa fa-fw fa-star"/>ID: #{charInfo.id}</span><br/>
								<span className="status"> Status:  <i className={`fa fa-circle ${charInfo.status.toLowerCase()} `} aria-hidden="true" />  {charInfo.status}</span>
							</strong>
						</div>
						<div className="imgContainer">
							<img className="img-responsive" alt={'character name'} src={charInfo.image} />
						</div>
						<div className="description p-2">
								<p><i className="fa fa-users" /> Species: {charInfo.species}</p>
								<p><i className="fa fa-venus-mars" aria-hidden="true" /> Gender: {charInfo.gender}</p>
								<p><i className="fa fa-globe"/> Origin:  {charInfo.origin.name}</p>
								<p><i className="fa fa-map-marker"/> Location: {charInfo.location.name}</p>
						</div>
						<div className="footer p-2">
							<h6>Created At {timeSince(charInfo.created)} ago</h6>
						</div>
					</article>
				</div>
		)
	}

	public render(){
		return(
				<div className="row active-with-click">
					{this.props.characters.charList.map((charInfo: ICharInfo)=>{
						return this.cardBox(charInfo)
					})}
				</div>
		)
	}
}
