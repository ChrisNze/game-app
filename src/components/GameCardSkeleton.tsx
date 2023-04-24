const GameCardSkeleton = () => {
	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3 rounded-3 load_container">
			<div className="card card_container load">
				<div className="card-img-top  load_img" />
				<div className="card-body">
					<h1 className="card-title load_title rounded"></h1>
				</div>
				<div className="d-flex justify-content-between pe-5 ps-3 pb-5">
					<div className="card-text fs-4 load_icon rounded"></div>
					<div className="load_critics rounded"></div>
				</div>
			</div>
		</div>
	);
};

export default GameCardSkeleton;
