
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Moment from 'moment';
import { urlImage } from "../../config";
import categoryservice from "../../service/CategorySevice";

function AllCategory() {
	const [categorys, setCategorys] = useState([]);
	const [products, setProducts] = useState([]);
	useEffect(function () {
		(async function () {
			await categoryservice.getAll()
				.then(function (result) {
					setCategorys(result.data.data);
				}
				);
		})();
	}, []);
	return (
		<>
			<section class="section-content padding-y">
				<div class="container">
					<div className="form-inline">
						<strong className="mr-md-auto">32 Items found </strong>
						<select className="mr-2 form-control">
							<option>Latest items</option>
							<option>Trending</option>
							<option>Most Popular</option>
							<option>Cheapest</option>
						</select>
						<div className="btn-group">
							<>
								<Link
									to={"/"}
									className="btn btn-light"
									data-toggle="tooltip"
									title="Home"
								>
									<i className="fa fa-home" />
								</Link>
							</>

						</div>
					</div>
					<div className="form-inline">
						<strong className="mr-md-auto">32 Items found </strong>
						<select className="mr-2 form-control">
							<option>Latest items</option>
							<option>Trending</option>
							<option>Most Popular</option>
							<option>Cheapest</option>
						</select>
						<div className="btn-group">
							<>
								<Link
									to={"/"}
									className="btn btn-light"
									data-toggle="tooltip"
									title="Home"
								>
									<i className="fa fa-home" />
								</Link>
							</>

						</div>
					</div>

					<nav class="row">

						{categorys.map(function (category, index) {
							return (
								<div class="col-md-2" >
									<div class="card card-category">
										<a href="#" class="img-wrap" style={{ background: "#dee4ff" }}>
											<img src={urlImage + 'category/' + category.image}></img>
										</a>
										<div class="card-body">
											<h4 class="card-title"><Link to={"/tat-ca-loai/" + category.id}>{category.name}</Link></h4>
										</div>
									</div>
								</div>
							)
						})};
					</nav>


				</div>
			</section>
		</>
	);
}

export default AllCategory