import React from "react";
import scss from "./Filters.module.scss";
import {FILTERS} from "../../common/common.constants";

export class Filters extends React.PureComponent{
	constructor(props:any) {
		super(props);
	}

	public renderGenderFilters():JSX.Element{
		return(
				<div>
        		<h6>Genders: </h6>
						{FILTERS.genders.map((gender)=>{
							return(
								<label className={scss.container}>{`${gender}`}
									<input type="checkbox" value={gender}/>
										<span className={scss.checkmark} />
								</label>
							)
						})}
				</div>
		)
	}

	public renderSpecies():JSX.Element{
		return(
				<div>
					<h6>Species: </h6>
					{FILTERS.species.map((spe)=>{
						return(
								<label className={scss.container}>{`${spe}`}
									<input type="checkbox" value={spe}/>
									<span className={scss.checkmark} />
								</label>
						)
					})}
				</div>
		)
	}

	public renderStatus(){
		return(
				<div>
					<h6>Status: </h6>
					{FILTERS.status.map((sts)=>{
						return(
								<label className={scss.container}>{`${sts}`}
									<input type="checkbox" value={sts}/>
									<span className={scss.checkmark} />
								</label>
						)
					})}
				</div>
		)
	}

	public render():JSX.Element{
		return(
			<div className={scss.filters}>
				<h4>Filter By: </h4>
				{this.renderGenderFilters()}
				<br/>
				{this.renderSpecies()}
				<br/>
				{this.renderStatus()}
			</div>
		)
	}
}
