import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const App = () => {
	const [drugs, setDrugs] = useState([]);
	const [loading, setLoading] = useState(false);

	let proteinArray = [];
	let kinase = 0;
	let otherProteins = 0;
	let empty = 0;
	let enzyme = 0;
	let gpcr = 0;
	let legendWithValues;
	let legendWithKinase;
	let legendWithEnzyme;
	let legendWithOther;
	let legendWithGpcr;
	let legendWithEmpty;

	const getDrugData = async () => {
		try {
			const data = await axios.get(
				"https://drugtargetcommons.fimm.fi/api/data/bioactivity/?format=json"
			);

			let array = data.data['bioactivities']

			for (let i = 0; i < array.length; i++) {
				let protein = array[i].protein_class;
				proteinArray.push(protein);
			}

			for (let j = 0; j < proteinArray.length; j++) {
				if (proteinArray[j] === 'Kinase') {
					kinase++;
				} else if (proteinArray[j] === 'Enzyme') {
					enzyme++;
				} else if (proteinArray[j] === 'Other proteins') {
					otherProteins++;
				} else if (proteinArray[j] === 'GPCR') {
					gpcr++;
				} else {
					empty++;
				}
			}
			//legendWithValues = [['Kinase', kinase], ['Enzyme', enzyme], ['Other proteins', otherProteins], ['GPCR', gpcr], ['Empty', empty]];
			legendWithValues = { 'Kinase': kinase, 'Enzyme': enzyme, 'Other proteins': otherProteins, 'GPCR': gpcr, 'Empty': empty };
			legendWithKinase = {
				name: 'Kinase',
				y: kinase
			};
			legendWithEnzyme = {
				name: 'Enzyme',
				y: enzyme
			};
			legendWithOther = {
				name: 'Other proteins',
				y: otherProteins
			};
			legendWithGpcr = {
				name: 'GPCR',
				y: gpcr
			};
			legendWithEmpty = {
				name: ' Empty',
				y: empty
			};

			setDrugs(data.data.bioactivities);
			setLoading(true);
		} catch (e) {
			console.log(e)
		}
	};

	const columns = [
		{ dataField: "chembl_id", text: "Chembl ID", sort: true },
		{ dataField: "activity_comment", text: "Activity Comment", sort: true },
		{ dataField: "annotated", text: "Annotated", sort: true },
		{ dataField: "annotation_comments", text: "Annotation Comments", sort: true },
		{ dataField: "assay_cell_type", text: "Assay Cell Type", sort: true },
		{ dataField: "assay_format", text: "Assay Format", sort: true },
		{ dataField: "assay_sub_type", text: "Assay Sub-Type", sort: true },
		{ dataField: "assay_type", text: "Assay Type", sort: true },
		{ dataField: "authors", text: "Authors", sort: true },
		{ dataField: "compound_concentration_value", text: "Compount Concetration Value", sort: true },
		{ dataField: "compound_concentration_value_unit", text: "Compount Concetration Value Unit", sort: true },
		{ dataField: "compound_name", text: "Compound Name", sort: true },
		{ dataField: "detection_technology", text: "Detection Technology", sort: true },
		{ dataField: "endpoint_actionmode", text: "Endpoint Actionmode", sort: true },
		{ dataField: "endpoint_standard_relation", text: "Endpoint Standard Relation", sort: true },
		{ dataField: "endpoint_standard_type", text: "Endpoint Standard Type", sort: true },
		{ dataField: "endpoint_standard_units", text: "Endpoint Standard Units", sort: true },
		{ dataField: "endpoint_standard_value", text: "Endpoint Standard Value", sort: true },
		{ dataField: "gene_name", text: "Gene Name", sort: true },
		{ dataField: "inhibitor_type", text: "Inhibitor Type", sort: true },
		{ dataField: "max_phase", text: "Max Phase", sort: true, filter: textFilter() },
		{ dataField: "mutation_info", text: "Mutation Info", sort: true },
		{ dataField: "protein_class", text: "Protein Class", sort: true },
		{ dataField: "pubmed_id", text: "Pubmed ID", sort: true },
		{ dataField: "resource_uri", text: "Resource URI", sort: true },
		{ dataField: "target_organism", text: "Target Organism", sort: true },
		{ dataField: "target_pref_name", text: "Target Pref Name", sort: true },
		{ dataField: "uniprot_id", text: "Uniprot ID", sort: true },
		{ dataField: "wildtype_or_mutant", text: "Wildtype or Mutant", sort: true }
	]

	const customTotal = (from, to, size) => (
		<span className="react-bootstrap-table-pagination-total">
			Showing { from} to { to} of { size} Results
		</span>
	);

	const options = {
		showTotal: true,
		paginationTotalRenderer: customTotal
	};

	const pieOptions = {
		chart: {
			type: 'pie'
		},
		title: {
			text: 'Target classification'
		},
		series: [
			{
				data: [
					{
						name: 'Kinase',
						y: 1
					},
					{
						name: 'Enzyme',
						y: 4
					},
					{
						name: 'Other proteins',
						y: 1
					},
					{
						name: 'GPCR',
						y: 2
					},
					{
						name: ' Empty',
						y: 12
					}]
			}
		]
	};

	useEffect(() => {
		getDrugData();
	}, []);


	return (
		<div className="App">
			{loading ? (
				<Fragment>
					<div class="col-xs-12 col-ms-12 col-md-12 col-lg-12">
						<div id="Home_Abstract">
							<h2>Drug Target Commons (DTC)</h2>
							<p>
								Drug Target Commons (DTC) is a crowd-sourcing platform to improve the consensus and use of drug-target interactions. The end users can search, view and download bioactivity data using various compound, target and publications identifiers. Expert users may also submit suggestions to edit and upload new  bioactivity data, as well as participate in the assay annotation and data curation processes.
                    		</p>
						</div>
					</div>
					<div class="panel-heading"><b>Classification of annotated targets and bioactivity types </b></div>
					<HighchartsReact highcharts={Highcharts} options={pieOptions} />
					<div class="panel-heading"><b>Annotated compounds</b> </div>
					<BootstrapTable
						keyField="activity_comment"
						data={drugs}
						columns={columns}
						pagination={paginationFactory(options)}
						filter={filterFactory()}
					/>
				</Fragment>

			) : (
					<ReactBootStrap.Spinner animation="border" variant="primary" />
				)}
		</div>
	);
};

export default App;
