let pipelines= [
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
        "_score": 1,
        "_source": {
            "id": "28f1918f-3ce4-4774-ab6c-7b9212d25f74",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:49.181295Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.9.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "detect_semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "http://schema.org/Boolean",
                                "https://metadata.datadrivendiscovery.org/types/CategoricalData",
                                "http://schema.org/Integer",
                                "http://schema.org/Float",
                                "http://schema.org/Text",
                                "https://metadata.datadrivendiscovery.org/types/Attribute",
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget",
                                "https://metadata.datadrivendiscovery.org/types/PrimaryKey"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "3002bc5b-fa47-4a3d-882e-a8b5f3d756aa",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.remove_semantic_types.Common",
                        "name": "Remove semantic types from columns",
                        "digest": "2355cf00a98f086ec55d200af1b9b6025e2b873d6402c96a386a8eccbb89d175"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "5361ebf6-9e5a-4ce5-b73c-3babf12f1941",
                        "version": "v6.0.0",
                        "python_path": "d3m.primitives.data_preprocessing.lupi_mfa.lupi_mfa.LupiMFA",
                        "name": "lupi_mfa.lupi_mfa.LupiMFA",
                        "digest": "dd4d81803be33a14a00f1d93c9123c2d1e1a51453ba71460b8b37acaab70ff29"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "C_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "gamma_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "use_scree": {
                            "type": "VALUE",
                            "data": false
                        },
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "regressor_type": {
                            "type": "VALUE",
                            "data": "linear"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "strategy": {
                            "type": "VALUE",
                            "data": "most_frequent"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "c8a28f02-ef4a-35a8-87f1-cf79980f5c3e",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.extra_trees.SKlearn",
                        "name": "sklearn.ensemble.forest.ExtraTreesClassifier",
                        "digest": "fa4bd6fa9af0ecc5b8b6ccddf44333655775814d3cf1710e2d43605fa86aacde"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.7.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 50
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.8.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:31.327747Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
        "_score": 1,
        "_source": {
            "id": "6c79a231-cf57-4a40-b1ca-aadfec7984d1",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:59:51.876191Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "return_result": {
                            "type": "VALUE",
                            "data": "replace"
                        },
                        "strategy": {
                            "type": "VALUE",
                            "data": "mean"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "16696c4d-bed9-34a2-b9ae-b882c069512d",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.feature_selection.select_percentile.SKlearn",
                        "name": "sklearn.feature_selection.univariate_selection.SelectPercentile",
                        "digest": "33bbdf59ef441516ddeb22663efc57561717e693d9a4b84068f0aa60b83a2ccd"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        },
                        {
                            "id": "produce_support"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "exclude_inputs_columns": {
                            "type": "VALUE",
                            "data": [
                                0,
                                16
                            ]
                        },
                        "score_func": {
                            "type": "VALUE",
                            "data": "f_classif"
                        },
                        "percentile": {
                            "type": "VALUE",
                            "data": 10
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "1dd82833-5692-39cb-84fb-2455683075f3",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.random_forest.SKlearn",
                        "name": "sklearn.ensemble.forest.RandomForestClassifier",
                        "digest": "93abe4b22214ba6202c13c6a2fe5b2b4d03cdc28a78fa02b6f2759e7b125eaed"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 10
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:42.521876Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
        "_score": 1,
        "_source": {
            "id": "a5a47f58-edcc-4c7b-a0ed-187ad11fe303",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:46.354214Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                25
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                6
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "09f252eb-215d-4e0b-9a60-fcd967f5e708",
                        "version": "0.2.1",
                        "python_path": "d3m.primitives.data_transformation.encoder.DistilTextEncoder",
                        "name": "Text encoder",
                        "digest": "ca6c5d86bdae44671ffeeb05ab8c5796c1bddddf09624214ce1ab876ee004ce6"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "encoder_type": {
                            "type": "VALUE",
                            "data": "tfidf"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e0ad06ce-b484-46b0-a478-c567e1ea7e02",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.learner.random_forest.DistilEnsembleForest",
                        "name": "EnsembleForest",
                        "digest": "8572316447af3ae79687d2ae00ffe10a5c66b699198adfcaacce8d3678716bd7"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:47.744389Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
        "_score": 1,
        "_source": {
            "id": "28f1918f-3ce4-4774-ab6c-7b9212d25f74",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:49.181295Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.9.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "detect_semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "http://schema.org/Boolean",
                                "https://metadata.datadrivendiscovery.org/types/CategoricalData",
                                "http://schema.org/Integer",
                                "http://schema.org/Float",
                                "http://schema.org/Text",
                                "https://metadata.datadrivendiscovery.org/types/Attribute",
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget",
                                "https://metadata.datadrivendiscovery.org/types/PrimaryKey"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "3002bc5b-fa47-4a3d-882e-a8b5f3d756aa",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.remove_semantic_types.Common",
                        "name": "Remove semantic types from columns",
                        "digest": "2355cf00a98f086ec55d200af1b9b6025e2b873d6402c96a386a8eccbb89d175"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "5361ebf6-9e5a-4ce5-b73c-3babf12f1941",
                        "version": "v6.0.0",
                        "python_path": "d3m.primitives.data_preprocessing.lupi_mfa.lupi_mfa.LupiMFA",
                        "name": "lupi_mfa.lupi_mfa.LupiMFA",
                        "digest": "dd4d81803be33a14a00f1d93c9123c2d1e1a51453ba71460b8b37acaab70ff29"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "C_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "gamma_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "use_scree": {
                            "type": "VALUE",
                            "data": false
                        },
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "regressor_type": {
                            "type": "VALUE",
                            "data": "linear"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "strategy": {
                            "type": "VALUE",
                            "data": "most_frequent"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "c8a28f02-ef4a-35a8-87f1-cf79980f5c3e",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.extra_trees.SKlearn",
                        "name": "sklearn.ensemble.forest.ExtraTreesClassifier",
                        "digest": "fa4bd6fa9af0ecc5b8b6ccddf44333655775814d3cf1710e2d43605fa86aacde"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.7.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 50
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.8.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:31.327747Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
        "_score": 1,
        "_source": {
            "id": "6c79a231-cf57-4a40-b1ca-aadfec7984d1",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:59:51.876191Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "return_result": {
                            "type": "VALUE",
                            "data": "replace"
                        },
                        "strategy": {
                            "type": "VALUE",
                            "data": "mean"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "16696c4d-bed9-34a2-b9ae-b882c069512d",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.feature_selection.select_percentile.SKlearn",
                        "name": "sklearn.feature_selection.univariate_selection.SelectPercentile",
                        "digest": "33bbdf59ef441516ddeb22663efc57561717e693d9a4b84068f0aa60b83a2ccd"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        },
                        {
                            "id": "produce_support"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "exclude_inputs_columns": {
                            "type": "VALUE",
                            "data": [
                                0,
                                16
                            ]
                        },
                        "score_func": {
                            "type": "VALUE",
                            "data": "f_classif"
                        },
                        "percentile": {
                            "type": "VALUE",
                            "data": 10
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "1dd82833-5692-39cb-84fb-2455683075f3",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.random_forest.SKlearn",
                        "name": "sklearn.ensemble.forest.RandomForestClassifier",
                        "digest": "93abe4b22214ba6202c13c6a2fe5b2b4d03cdc28a78fa02b6f2759e7b125eaed"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 10
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:42.521876Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
        "_score": 1,
        "_source": {
            "id": "a5a47f58-edcc-4c7b-a0ed-187ad11fe303",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:46.354214Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                25
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                6
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "09f252eb-215d-4e0b-9a60-fcd967f5e708",
                        "version": "0.2.1",
                        "python_path": "d3m.primitives.data_transformation.encoder.DistilTextEncoder",
                        "name": "Text encoder",
                        "digest": "ca6c5d86bdae44671ffeeb05ab8c5796c1bddddf09624214ce1ab876ee004ce6"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "encoder_type": {
                            "type": "VALUE",
                            "data": "tfidf"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e0ad06ce-b484-46b0-a478-c567e1ea7e02",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.learner.random_forest.DistilEnsembleForest",
                        "name": "EnsembleForest",
                        "digest": "8572316447af3ae79687d2ae00ffe10a5c66b699198adfcaacce8d3678716bd7"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:47.744389Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
        "_score": 1,
        "_source": {
            "id": "28f1918f-3ce4-4774-ab6c-7b9212d25f74",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:49.181295Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.9.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "detect_semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "http://schema.org/Boolean",
                                "https://metadata.datadrivendiscovery.org/types/CategoricalData",
                                "http://schema.org/Integer",
                                "http://schema.org/Float",
                                "http://schema.org/Text",
                                "https://metadata.datadrivendiscovery.org/types/Attribute",
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget",
                                "https://metadata.datadrivendiscovery.org/types/PrimaryKey"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "3002bc5b-fa47-4a3d-882e-a8b5f3d756aa",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.remove_semantic_types.Common",
                        "name": "Remove semantic types from columns",
                        "digest": "2355cf00a98f086ec55d200af1b9b6025e2b873d6402c96a386a8eccbb89d175"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "5361ebf6-9e5a-4ce5-b73c-3babf12f1941",
                        "version": "v6.0.0",
                        "python_path": "d3m.primitives.data_preprocessing.lupi_mfa.lupi_mfa.LupiMFA",
                        "name": "lupi_mfa.lupi_mfa.LupiMFA",
                        "digest": "dd4d81803be33a14a00f1d93c9123c2d1e1a51453ba71460b8b37acaab70ff29"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "C_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "gamma_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "use_scree": {
                            "type": "VALUE",
                            "data": false
                        },
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "regressor_type": {
                            "type": "VALUE",
                            "data": "linear"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "strategy": {
                            "type": "VALUE",
                            "data": "most_frequent"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "c8a28f02-ef4a-35a8-87f1-cf79980f5c3e",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.extra_trees.SKlearn",
                        "name": "sklearn.ensemble.forest.ExtraTreesClassifier",
                        "digest": "fa4bd6fa9af0ecc5b8b6ccddf44333655775814d3cf1710e2d43605fa86aacde"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.7.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 50
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.8.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:31.327747Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
        "_score": 1,
        "_source": {
            "id": "6c79a231-cf57-4a40-b1ca-aadfec7984d1",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:59:51.876191Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "return_result": {
                            "type": "VALUE",
                            "data": "replace"
                        },
                        "strategy": {
                            "type": "VALUE",
                            "data": "mean"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "16696c4d-bed9-34a2-b9ae-b882c069512d",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.feature_selection.select_percentile.SKlearn",
                        "name": "sklearn.feature_selection.univariate_selection.SelectPercentile",
                        "digest": "33bbdf59ef441516ddeb22663efc57561717e693d9a4b84068f0aa60b83a2ccd"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        },
                        {
                            "id": "produce_support"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "exclude_inputs_columns": {
                            "type": "VALUE",
                            "data": [
                                0,
                                16
                            ]
                        },
                        "score_func": {
                            "type": "VALUE",
                            "data": "f_classif"
                        },
                        "percentile": {
                            "type": "VALUE",
                            "data": 10
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "1dd82833-5692-39cb-84fb-2455683075f3",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.random_forest.SKlearn",
                        "name": "sklearn.ensemble.forest.RandomForestClassifier",
                        "digest": "93abe4b22214ba6202c13c6a2fe5b2b4d03cdc28a78fa02b6f2759e7b125eaed"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 10
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:42.521876Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
        "_score": 1,
        "_source": {
            "id": "a5a47f58-edcc-4c7b-a0ed-187ad11fe303",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:46.354214Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                25
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                6
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "09f252eb-215d-4e0b-9a60-fcd967f5e708",
                        "version": "0.2.1",
                        "python_path": "d3m.primitives.data_transformation.encoder.DistilTextEncoder",
                        "name": "Text encoder",
                        "digest": "ca6c5d86bdae44671ffeeb05ab8c5796c1bddddf09624214ce1ab876ee004ce6"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "encoder_type": {
                            "type": "VALUE",
                            "data": "tfidf"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e0ad06ce-b484-46b0-a478-c567e1ea7e02",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.learner.random_forest.DistilEnsembleForest",
                        "name": "EnsembleForest",
                        "digest": "8572316447af3ae79687d2ae00ffe10a5c66b699198adfcaacce8d3678716bd7"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:47.744389Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
        "_score": 1,
        "_source": {
            "id": "28f1918f-3ce4-4774-ab6c-7b9212d25f74",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:49.181295Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.9.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "detect_semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "http://schema.org/Boolean",
                                "https://metadata.datadrivendiscovery.org/types/CategoricalData",
                                "http://schema.org/Integer",
                                "http://schema.org/Float",
                                "http://schema.org/Text",
                                "https://metadata.datadrivendiscovery.org/types/Attribute",
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget",
                                "https://metadata.datadrivendiscovery.org/types/PrimaryKey"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "3002bc5b-fa47-4a3d-882e-a8b5f3d756aa",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.remove_semantic_types.Common",
                        "name": "Remove semantic types from columns",
                        "digest": "2355cf00a98f086ec55d200af1b9b6025e2b873d6402c96a386a8eccbb89d175"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "5361ebf6-9e5a-4ce5-b73c-3babf12f1941",
                        "version": "v6.0.0",
                        "python_path": "d3m.primitives.data_preprocessing.lupi_mfa.lupi_mfa.LupiMFA",
                        "name": "lupi_mfa.lupi_mfa.LupiMFA",
                        "digest": "dd4d81803be33a14a00f1d93c9123c2d1e1a51453ba71460b8b37acaab70ff29"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "C_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "gamma_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "use_scree": {
                            "type": "VALUE",
                            "data": false
                        },
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "regressor_type": {
                            "type": "VALUE",
                            "data": "linear"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "strategy": {
                            "type": "VALUE",
                            "data": "most_frequent"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "c8a28f02-ef4a-35a8-87f1-cf79980f5c3e",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.extra_trees.SKlearn",
                        "name": "sklearn.ensemble.forest.ExtraTreesClassifier",
                        "digest": "fa4bd6fa9af0ecc5b8b6ccddf44333655775814d3cf1710e2d43605fa86aacde"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.7.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 50
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.8.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:31.327747Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
        "_score": 1,
        "_source": {
            "id": "6c79a231-cf57-4a40-b1ca-aadfec7984d1",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:59:51.876191Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "return_result": {
                            "type": "VALUE",
                            "data": "replace"
                        },
                        "strategy": {
                            "type": "VALUE",
                            "data": "mean"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "16696c4d-bed9-34a2-b9ae-b882c069512d",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.feature_selection.select_percentile.SKlearn",
                        "name": "sklearn.feature_selection.univariate_selection.SelectPercentile",
                        "digest": "33bbdf59ef441516ddeb22663efc57561717e693d9a4b84068f0aa60b83a2ccd"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        },
                        {
                            "id": "produce_support"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "exclude_inputs_columns": {
                            "type": "VALUE",
                            "data": [
                                0,
                                16
                            ]
                        },
                        "score_func": {
                            "type": "VALUE",
                            "data": "f_classif"
                        },
                        "percentile": {
                            "type": "VALUE",
                            "data": 10
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "1dd82833-5692-39cb-84fb-2455683075f3",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.random_forest.SKlearn",
                        "name": "sklearn.ensemble.forest.RandomForestClassifier",
                        "digest": "93abe4b22214ba6202c13c6a2fe5b2b4d03cdc28a78fa02b6f2759e7b125eaed"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 10
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:42.521876Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
        "_score": 1,
        "_source": {
            "id": "a5a47f58-edcc-4c7b-a0ed-187ad11fe303",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:46.354214Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                25
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                6
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "09f252eb-215d-4e0b-9a60-fcd967f5e708",
                        "version": "0.2.1",
                        "python_path": "d3m.primitives.data_transformation.encoder.DistilTextEncoder",
                        "name": "Text encoder",
                        "digest": "ca6c5d86bdae44671ffeeb05ab8c5796c1bddddf09624214ce1ab876ee004ce6"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "encoder_type": {
                            "type": "VALUE",
                            "data": "tfidf"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e0ad06ce-b484-46b0-a478-c567e1ea7e02",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.learner.random_forest.DistilEnsembleForest",
                        "name": "EnsembleForest",
                        "digest": "8572316447af3ae79687d2ae00ffe10a5c66b699198adfcaacce8d3678716bd7"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:47.744389Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
        "_score": 1,
        "_source": {
            "id": "28f1918f-3ce4-4774-ab6c-7b9212d25f74",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:49.181295Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.9.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "detect_semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "http://schema.org/Boolean",
                                "https://metadata.datadrivendiscovery.org/types/CategoricalData",
                                "http://schema.org/Integer",
                                "http://schema.org/Float",
                                "http://schema.org/Text",
                                "https://metadata.datadrivendiscovery.org/types/Attribute",
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget",
                                "https://metadata.datadrivendiscovery.org/types/PrimaryKey"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "3002bc5b-fa47-4a3d-882e-a8b5f3d756aa",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.remove_semantic_types.Common",
                        "name": "Remove semantic types from columns",
                        "digest": "2355cf00a98f086ec55d200af1b9b6025e2b873d6402c96a386a8eccbb89d175"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "5361ebf6-9e5a-4ce5-b73c-3babf12f1941",
                        "version": "v6.0.0",
                        "python_path": "d3m.primitives.data_preprocessing.lupi_mfa.lupi_mfa.LupiMFA",
                        "name": "lupi_mfa.lupi_mfa.LupiMFA",
                        "digest": "dd4d81803be33a14a00f1d93c9123c2d1e1a51453ba71460b8b37acaab70ff29"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "C_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "gamma_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "use_scree": {
                            "type": "VALUE",
                            "data": false
                        },
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "regressor_type": {
                            "type": "VALUE",
                            "data": "linear"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "strategy": {
                            "type": "VALUE",
                            "data": "most_frequent"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "c8a28f02-ef4a-35a8-87f1-cf79980f5c3e",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.extra_trees.SKlearn",
                        "name": "sklearn.ensemble.forest.ExtraTreesClassifier",
                        "digest": "fa4bd6fa9af0ecc5b8b6ccddf44333655775814d3cf1710e2d43605fa86aacde"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.7.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 50
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.8.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:31.327747Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
        "_score": 1,
        "_source": {
            "id": "6c79a231-cf57-4a40-b1ca-aadfec7984d1",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:59:51.876191Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "return_result": {
                            "type": "VALUE",
                            "data": "replace"
                        },
                        "strategy": {
                            "type": "VALUE",
                            "data": "mean"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "16696c4d-bed9-34a2-b9ae-b882c069512d",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.feature_selection.select_percentile.SKlearn",
                        "name": "sklearn.feature_selection.univariate_selection.SelectPercentile",
                        "digest": "33bbdf59ef441516ddeb22663efc57561717e693d9a4b84068f0aa60b83a2ccd"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        },
                        {
                            "id": "produce_support"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "exclude_inputs_columns": {
                            "type": "VALUE",
                            "data": [
                                0,
                                16
                            ]
                        },
                        "score_func": {
                            "type": "VALUE",
                            "data": "f_classif"
                        },
                        "percentile": {
                            "type": "VALUE",
                            "data": 10
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "1dd82833-5692-39cb-84fb-2455683075f3",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.random_forest.SKlearn",
                        "name": "sklearn.ensemble.forest.RandomForestClassifier",
                        "digest": "93abe4b22214ba6202c13c6a2fe5b2b4d03cdc28a78fa02b6f2759e7b125eaed"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 10
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:42.521876Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
        "_score": 1,
        "_source": {
            "id": "a5a47f58-edcc-4c7b-a0ed-187ad11fe303",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:46.354214Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                25
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                6
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "09f252eb-215d-4e0b-9a60-fcd967f5e708",
                        "version": "0.2.1",
                        "python_path": "d3m.primitives.data_transformation.encoder.DistilTextEncoder",
                        "name": "Text encoder",
                        "digest": "ca6c5d86bdae44671ffeeb05ab8c5796c1bddddf09624214ce1ab876ee004ce6"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "encoder_type": {
                            "type": "VALUE",
                            "data": "tfidf"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e0ad06ce-b484-46b0-a478-c567e1ea7e02",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.learner.random_forest.DistilEnsembleForest",
                        "name": "EnsembleForest",
                        "digest": "8572316447af3ae79687d2ae00ffe10a5c66b699198adfcaacce8d3678716bd7"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:47.744389Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
        "_score": 1,
        "_source": {
            "id": "28f1918f-3ce4-4774-ab6c-7b9212d25f74",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:49.181295Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.9.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "detect_semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "http://schema.org/Boolean",
                                "https://metadata.datadrivendiscovery.org/types/CategoricalData",
                                "http://schema.org/Integer",
                                "http://schema.org/Float",
                                "http://schema.org/Text",
                                "https://metadata.datadrivendiscovery.org/types/Attribute",
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget",
                                "https://metadata.datadrivendiscovery.org/types/PrimaryKey"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "3002bc5b-fa47-4a3d-882e-a8b5f3d756aa",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.remove_semantic_types.Common",
                        "name": "Remove semantic types from columns",
                        "digest": "2355cf00a98f086ec55d200af1b9b6025e2b873d6402c96a386a8eccbb89d175"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "5361ebf6-9e5a-4ce5-b73c-3babf12f1941",
                        "version": "v6.0.0",
                        "python_path": "d3m.primitives.data_preprocessing.lupi_mfa.lupi_mfa.LupiMFA",
                        "name": "lupi_mfa.lupi_mfa.LupiMFA",
                        "digest": "dd4d81803be33a14a00f1d93c9123c2d1e1a51453ba71460b8b37acaab70ff29"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "C_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "gamma_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "use_scree": {
                            "type": "VALUE",
                            "data": false
                        },
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "regressor_type": {
                            "type": "VALUE",
                            "data": "linear"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "strategy": {
                            "type": "VALUE",
                            "data": "most_frequent"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "c8a28f02-ef4a-35a8-87f1-cf79980f5c3e",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.extra_trees.SKlearn",
                        "name": "sklearn.ensemble.forest.ExtraTreesClassifier",
                        "digest": "fa4bd6fa9af0ecc5b8b6ccddf44333655775814d3cf1710e2d43605fa86aacde"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.7.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 50
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.8.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:31.327747Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
        "_score": 1,
        "_source": {
            "id": "6c79a231-cf57-4a40-b1ca-aadfec7984d1",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:59:51.876191Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "return_result": {
                            "type": "VALUE",
                            "data": "replace"
                        },
                        "strategy": {
                            "type": "VALUE",
                            "data": "mean"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "16696c4d-bed9-34a2-b9ae-b882c069512d",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.feature_selection.select_percentile.SKlearn",
                        "name": "sklearn.feature_selection.univariate_selection.SelectPercentile",
                        "digest": "33bbdf59ef441516ddeb22663efc57561717e693d9a4b84068f0aa60b83a2ccd"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        },
                        {
                            "id": "produce_support"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "exclude_inputs_columns": {
                            "type": "VALUE",
                            "data": [
                                0,
                                16
                            ]
                        },
                        "score_func": {
                            "type": "VALUE",
                            "data": "f_classif"
                        },
                        "percentile": {
                            "type": "VALUE",
                            "data": 10
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "1dd82833-5692-39cb-84fb-2455683075f3",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.random_forest.SKlearn",
                        "name": "sklearn.ensemble.forest.RandomForestClassifier",
                        "digest": "93abe4b22214ba6202c13c6a2fe5b2b4d03cdc28a78fa02b6f2759e7b125eaed"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 10
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:42.521876Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
        "_score": 1,
        "_source": {
            "id": "a5a47f58-edcc-4c7b-a0ed-187ad11fe303",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:46.354214Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                25
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                6
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "09f252eb-215d-4e0b-9a60-fcd967f5e708",
                        "version": "0.2.1",
                        "python_path": "d3m.primitives.data_transformation.encoder.DistilTextEncoder",
                        "name": "Text encoder",
                        "digest": "ca6c5d86bdae44671ffeeb05ab8c5796c1bddddf09624214ce1ab876ee004ce6"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "encoder_type": {
                            "type": "VALUE",
                            "data": "tfidf"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e0ad06ce-b484-46b0-a478-c567e1ea7e02",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.learner.random_forest.DistilEnsembleForest",
                        "name": "EnsembleForest",
                        "digest": "8572316447af3ae79687d2ae00ffe10a5c66b699198adfcaacce8d3678716bd7"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:47.744389Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
        "_score": 1,
        "_source": {
            "id": "28f1918f-3ce4-4774-ab6c-7b9212d25f74",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:49.181295Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.9.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "detect_semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "http://schema.org/Boolean",
                                "https://metadata.datadrivendiscovery.org/types/CategoricalData",
                                "http://schema.org/Integer",
                                "http://schema.org/Float",
                                "http://schema.org/Text",
                                "https://metadata.datadrivendiscovery.org/types/Attribute",
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget",
                                "https://metadata.datadrivendiscovery.org/types/PrimaryKey"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "3002bc5b-fa47-4a3d-882e-a8b5f3d756aa",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.remove_semantic_types.Common",
                        "name": "Remove semantic types from columns",
                        "digest": "2355cf00a98f086ec55d200af1b9b6025e2b873d6402c96a386a8eccbb89d175"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "5361ebf6-9e5a-4ce5-b73c-3babf12f1941",
                        "version": "v6.0.0",
                        "python_path": "d3m.primitives.data_preprocessing.lupi_mfa.lupi_mfa.LupiMFA",
                        "name": "lupi_mfa.lupi_mfa.LupiMFA",
                        "digest": "dd4d81803be33a14a00f1d93c9123c2d1e1a51453ba71460b8b37acaab70ff29"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "C_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "gamma_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "use_scree": {
                            "type": "VALUE",
                            "data": false
                        },
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "regressor_type": {
                            "type": "VALUE",
                            "data": "linear"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "strategy": {
                            "type": "VALUE",
                            "data": "most_frequent"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "c8a28f02-ef4a-35a8-87f1-cf79980f5c3e",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.extra_trees.SKlearn",
                        "name": "sklearn.ensemble.forest.ExtraTreesClassifier",
                        "digest": "fa4bd6fa9af0ecc5b8b6ccddf44333655775814d3cf1710e2d43605fa86aacde"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.7.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 50
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.8.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:31.327747Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
        "_score": 1,
        "_source": {
            "id": "6c79a231-cf57-4a40-b1ca-aadfec7984d1",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:59:51.876191Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "return_result": {
                            "type": "VALUE",
                            "data": "replace"
                        },
                        "strategy": {
                            "type": "VALUE",
                            "data": "mean"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "16696c4d-bed9-34a2-b9ae-b882c069512d",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.feature_selection.select_percentile.SKlearn",
                        "name": "sklearn.feature_selection.univariate_selection.SelectPercentile",
                        "digest": "33bbdf59ef441516ddeb22663efc57561717e693d9a4b84068f0aa60b83a2ccd"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        },
                        {
                            "id": "produce_support"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "exclude_inputs_columns": {
                            "type": "VALUE",
                            "data": [
                                0,
                                16
                            ]
                        },
                        "score_func": {
                            "type": "VALUE",
                            "data": "f_classif"
                        },
                        "percentile": {
                            "type": "VALUE",
                            "data": 10
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "1dd82833-5692-39cb-84fb-2455683075f3",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.random_forest.SKlearn",
                        "name": "sklearn.ensemble.forest.RandomForestClassifier",
                        "digest": "93abe4b22214ba6202c13c6a2fe5b2b4d03cdc28a78fa02b6f2759e7b125eaed"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 10
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:42.521876Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
        "_score": 1,
        "_source": {
            "id": "a5a47f58-edcc-4c7b-a0ed-187ad11fe303",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:46.354214Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                25
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                6
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "09f252eb-215d-4e0b-9a60-fcd967f5e708",
                        "version": "0.2.1",
                        "python_path": "d3m.primitives.data_transformation.encoder.DistilTextEncoder",
                        "name": "Text encoder",
                        "digest": "ca6c5d86bdae44671ffeeb05ab8c5796c1bddddf09624214ce1ab876ee004ce6"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "encoder_type": {
                            "type": "VALUE",
                            "data": "tfidf"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e0ad06ce-b484-46b0-a478-c567e1ea7e02",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.learner.random_forest.DistilEnsembleForest",
                        "name": "EnsembleForest",
                        "digest": "8572316447af3ae79687d2ae00ffe10a5c66b699198adfcaacce8d3678716bd7"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:47.744389Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
        "_score": 1,
        "_source": {
            "id": "28f1918f-3ce4-4774-ab6c-7b9212d25f74",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:49.181295Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.9.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "detect_semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "http://schema.org/Boolean",
                                "https://metadata.datadrivendiscovery.org/types/CategoricalData",
                                "http://schema.org/Integer",
                                "http://schema.org/Float",
                                "http://schema.org/Text",
                                "https://metadata.datadrivendiscovery.org/types/Attribute",
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget",
                                "https://metadata.datadrivendiscovery.org/types/PrimaryKey"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "3002bc5b-fa47-4a3d-882e-a8b5f3d756aa",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.remove_semantic_types.Common",
                        "name": "Remove semantic types from columns",
                        "digest": "2355cf00a98f086ec55d200af1b9b6025e2b873d6402c96a386a8eccbb89d175"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "5361ebf6-9e5a-4ce5-b73c-3babf12f1941",
                        "version": "v6.0.0",
                        "python_path": "d3m.primitives.data_preprocessing.lupi_mfa.lupi_mfa.LupiMFA",
                        "name": "lupi_mfa.lupi_mfa.LupiMFA",
                        "digest": "dd4d81803be33a14a00f1d93c9123c2d1e1a51453ba71460b8b37acaab70ff29"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "C_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "gamma_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "use_scree": {
                            "type": "VALUE",
                            "data": false
                        },
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "regressor_type": {
                            "type": "VALUE",
                            "data": "linear"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "strategy": {
                            "type": "VALUE",
                            "data": "most_frequent"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "c8a28f02-ef4a-35a8-87f1-cf79980f5c3e",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.extra_trees.SKlearn",
                        "name": "sklearn.ensemble.forest.ExtraTreesClassifier",
                        "digest": "fa4bd6fa9af0ecc5b8b6ccddf44333655775814d3cf1710e2d43605fa86aacde"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.7.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 50
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.8.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:31.327747Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
        "_score": 1,
        "_source": {
            "id": "6c79a231-cf57-4a40-b1ca-aadfec7984d1",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:59:51.876191Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "return_result": {
                            "type": "VALUE",
                            "data": "replace"
                        },
                        "strategy": {
                            "type": "VALUE",
                            "data": "mean"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "16696c4d-bed9-34a2-b9ae-b882c069512d",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.feature_selection.select_percentile.SKlearn",
                        "name": "sklearn.feature_selection.univariate_selection.SelectPercentile",
                        "digest": "33bbdf59ef441516ddeb22663efc57561717e693d9a4b84068f0aa60b83a2ccd"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        },
                        {
                            "id": "produce_support"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "exclude_inputs_columns": {
                            "type": "VALUE",
                            "data": [
                                0,
                                16
                            ]
                        },
                        "score_func": {
                            "type": "VALUE",
                            "data": "f_classif"
                        },
                        "percentile": {
                            "type": "VALUE",
                            "data": 10
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "1dd82833-5692-39cb-84fb-2455683075f3",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.random_forest.SKlearn",
                        "name": "sklearn.ensemble.forest.RandomForestClassifier",
                        "digest": "93abe4b22214ba6202c13c6a2fe5b2b4d03cdc28a78fa02b6f2759e7b125eaed"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 10
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:42.521876Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
        "_score": 1,
        "_source": {
            "id": "a5a47f58-edcc-4c7b-a0ed-187ad11fe303",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:46.354214Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                25
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                6
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "09f252eb-215d-4e0b-9a60-fcd967f5e708",
                        "version": "0.2.1",
                        "python_path": "d3m.primitives.data_transformation.encoder.DistilTextEncoder",
                        "name": "Text encoder",
                        "digest": "ca6c5d86bdae44671ffeeb05ab8c5796c1bddddf09624214ce1ab876ee004ce6"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "encoder_type": {
                            "type": "VALUE",
                            "data": "tfidf"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e0ad06ce-b484-46b0-a478-c567e1ea7e02",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.learner.random_forest.DistilEnsembleForest",
                        "name": "EnsembleForest",
                        "digest": "8572316447af3ae79687d2ae00ffe10a5c66b699198adfcaacce8d3678716bd7"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:47.744389Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
        "_score": 1,
        "_source": {
            "id": "28f1918f-3ce4-4774-ab6c-7b9212d25f74",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:49.181295Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.9.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "detect_semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "http://schema.org/Boolean",
                                "https://metadata.datadrivendiscovery.org/types/CategoricalData",
                                "http://schema.org/Integer",
                                "http://schema.org/Float",
                                "http://schema.org/Text",
                                "https://metadata.datadrivendiscovery.org/types/Attribute",
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget",
                                "https://metadata.datadrivendiscovery.org/types/PrimaryKey"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "3002bc5b-fa47-4a3d-882e-a8b5f3d756aa",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.remove_semantic_types.Common",
                        "name": "Remove semantic types from columns",
                        "digest": "2355cf00a98f086ec55d200af1b9b6025e2b873d6402c96a386a8eccbb89d175"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "5361ebf6-9e5a-4ce5-b73c-3babf12f1941",
                        "version": "v6.0.0",
                        "python_path": "d3m.primitives.data_preprocessing.lupi_mfa.lupi_mfa.LupiMFA",
                        "name": "lupi_mfa.lupi_mfa.LupiMFA",
                        "digest": "dd4d81803be33a14a00f1d93c9123c2d1e1a51453ba71460b8b37acaab70ff29"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "C_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "gamma_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "use_scree": {
                            "type": "VALUE",
                            "data": false
                        },
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "regressor_type": {
                            "type": "VALUE",
                            "data": "linear"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "strategy": {
                            "type": "VALUE",
                            "data": "most_frequent"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "c8a28f02-ef4a-35a8-87f1-cf79980f5c3e",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.extra_trees.SKlearn",
                        "name": "sklearn.ensemble.forest.ExtraTreesClassifier",
                        "digest": "fa4bd6fa9af0ecc5b8b6ccddf44333655775814d3cf1710e2d43605fa86aacde"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.7.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 50
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.8.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:31.327747Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
        "_score": 1,
        "_source": {
            "id": "6c79a231-cf57-4a40-b1ca-aadfec7984d1",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:59:51.876191Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "return_result": {
                            "type": "VALUE",
                            "data": "replace"
                        },
                        "strategy": {
                            "type": "VALUE",
                            "data": "mean"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "16696c4d-bed9-34a2-b9ae-b882c069512d",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.feature_selection.select_percentile.SKlearn",
                        "name": "sklearn.feature_selection.univariate_selection.SelectPercentile",
                        "digest": "33bbdf59ef441516ddeb22663efc57561717e693d9a4b84068f0aa60b83a2ccd"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        },
                        {
                            "id": "produce_support"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "exclude_inputs_columns": {
                            "type": "VALUE",
                            "data": [
                                0,
                                16
                            ]
                        },
                        "score_func": {
                            "type": "VALUE",
                            "data": "f_classif"
                        },
                        "percentile": {
                            "type": "VALUE",
                            "data": 10
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "1dd82833-5692-39cb-84fb-2455683075f3",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.random_forest.SKlearn",
                        "name": "sklearn.ensemble.forest.RandomForestClassifier",
                        "digest": "93abe4b22214ba6202c13c6a2fe5b2b4d03cdc28a78fa02b6f2759e7b125eaed"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 10
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:42.521876Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
        "_score": 1,
        "_source": {
            "id": "a5a47f58-edcc-4c7b-a0ed-187ad11fe303",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:46.354214Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                25
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                6
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "09f252eb-215d-4e0b-9a60-fcd967f5e708",
                        "version": "0.2.1",
                        "python_path": "d3m.primitives.data_transformation.encoder.DistilTextEncoder",
                        "name": "Text encoder",
                        "digest": "ca6c5d86bdae44671ffeeb05ab8c5796c1bddddf09624214ce1ab876ee004ce6"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "encoder_type": {
                            "type": "VALUE",
                            "data": "tfidf"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e0ad06ce-b484-46b0-a478-c567e1ea7e02",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.learner.random_forest.DistilEnsembleForest",
                        "name": "EnsembleForest",
                        "digest": "8572316447af3ae79687d2ae00ffe10a5c66b699198adfcaacce8d3678716bd7"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:47.744389Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
        "_score": 1,
        "_source": {
            "id": "28f1918f-3ce4-4774-ab6c-7b9212d25f74",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:49.181295Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.9.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "detect_semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "http://schema.org/Boolean",
                                "https://metadata.datadrivendiscovery.org/types/CategoricalData",
                                "http://schema.org/Integer",
                                "http://schema.org/Float",
                                "http://schema.org/Text",
                                "https://metadata.datadrivendiscovery.org/types/Attribute",
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget",
                                "https://metadata.datadrivendiscovery.org/types/PrimaryKey"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "3002bc5b-fa47-4a3d-882e-a8b5f3d756aa",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.remove_semantic_types.Common",
                        "name": "Remove semantic types from columns",
                        "digest": "2355cf00a98f086ec55d200af1b9b6025e2b873d6402c96a386a8eccbb89d175"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "5361ebf6-9e5a-4ce5-b73c-3babf12f1941",
                        "version": "v6.0.0",
                        "python_path": "d3m.primitives.data_preprocessing.lupi_mfa.lupi_mfa.LupiMFA",
                        "name": "lupi_mfa.lupi_mfa.LupiMFA",
                        "digest": "dd4d81803be33a14a00f1d93c9123c2d1e1a51453ba71460b8b37acaab70ff29"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "C_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "gamma_gridsearch": {
                            "type": "VALUE",
                            "data": {
                                "encoding": "pickle",
                                "value": "gANHwBAAAAAAAABHQCUAAAAAAABHQBOZmZmZmZqHcQAu"
                            }
                        },
                        "use_scree": {
                            "type": "VALUE",
                            "data": false
                        },
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "regressor_type": {
                            "type": "VALUE",
                            "data": "linear"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "strategy": {
                            "type": "VALUE",
                            "data": "most_frequent"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "c8a28f02-ef4a-35a8-87f1-cf79980f5c3e",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.extra_trees.SKlearn",
                        "name": "sklearn.ensemble.forest.ExtraTreesClassifier",
                        "digest": "fa4bd6fa9af0ecc5b8b6ccddf44333655775814d3cf1710e2d43605fa86aacde"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.7.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 50
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.8.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "38f91fd394669ad4364ee2b7d5319e78f393d23f8715f552383e197a99227500",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:31.327747Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
        "_score": 1,
        "_source": {
            "id": "6c79a231-cf57-4a40-b1ca-aadfec7984d1",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:59:51.876191Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/Attribute"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4503a4c6-42f7-45a1-a1d4-ed69699cf5e1",
                        "version": "0.4.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns_by_semantic_types.Common",
                        "name": "Extracts columns by semantic type",
                        "digest": "591d3ee40b266bda04fa345aeea7b56d81db182fb144cde164e02be019a05f10"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "semantic_types": {
                            "type": "VALUE",
                            "data": [
                                "https://metadata.datadrivendiscovery.org/types/TrueTarget"
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d016df89-de62-3c53-87ed-c06bb6a23cde",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.data_cleaning.imputer.SKlearn",
                        "name": "sklearn.impute.SimpleImputer",
                        "digest": "1fbe6321949de3f9bd1d93c6900cd5c3b3ee4b1a01506b89c69a776a9d27bf7a"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "return_result": {
                            "type": "VALUE",
                            "data": "replace"
                        },
                        "strategy": {
                            "type": "VALUE",
                            "data": "mean"
                        },
                        "add_indicator": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "16696c4d-bed9-34a2-b9ae-b882c069512d",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.feature_selection.select_percentile.SKlearn",
                        "name": "sklearn.feature_selection.univariate_selection.SelectPercentile",
                        "digest": "33bbdf59ef441516ddeb22663efc57561717e693d9a4b84068f0aa60b83a2ccd"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        },
                        {
                            "id": "produce_support"
                        }
                    ],
                    "hyperparams": {
                        "use_semantic_types": {
                            "type": "VALUE",
                            "data": true
                        },
                        "exclude_inputs_columns": {
                            "type": "VALUE",
                            "data": [
                                0,
                                16
                            ]
                        },
                        "score_func": {
                            "type": "VALUE",
                            "data": "f_classif"
                        },
                        "percentile": {
                            "type": "VALUE",
                            "data": 10
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "1dd82833-5692-39cb-84fb-2455683075f3",
                        "version": "2019.11.13",
                        "python_path": "d3m.primitives.classification.random_forest.SKlearn",
                        "name": "sklearn.ensemble.forest.RandomForestClassifier",
                        "digest": "93abe4b22214ba6202c13c6a2fe5b2b4d03cdc28a78fa02b6f2759e7b125eaed"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "n_estimators": {
                            "type": "VALUE",
                            "data": 10
                        },
                        "criterion": {
                            "type": "VALUE",
                            "data": "gini"
                        },
                        "min_weight_fraction_leaf": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "min_impurity_decrease": {
                            "type": "VALUE",
                            "data": 0
                        },
                        "bootstrap": {
                            "type": "VALUE",
                            "data": "bootstrap"
                        },
                        "warm_start": {
                            "type": "VALUE",
                            "data": false
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8a9d18cd972cf9d155a65bef38e7d4cffc184b93a1611c4febcd059c3f886981",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:42.521876Z"
        }
    },
    {
        "_index": "pipelines_202002",
        "_type": "_doc",
        "_id": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
        "_score": 1,
        "_source": {
            "id": "a5a47f58-edcc-4c7b-a0ed-187ad11fe303",
            "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
            "created": "2020-02-07T12:45:46.354214Z",
            "inputs": [
                {
                    "name": "inputs"
                }
            ],
            "outputs": [
                {
                    "data": "steps.7.produce",
                    "name": "output predictions"
                }
            ],
            "steps": [
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "4b42ce1e-9b98-4a25-b68e-fad13311eb65",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.dataset_to_dataframe.Common",
                        "name": "Extract a DataFrame from a Dataset",
                        "digest": "990784f527a78250fcab70af9714314490e91f9a5916eb38834d74e8c38f435b"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "inputs.0"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e193afa1-b45e-4d29-918f-5bb1fa3b88a7",
                        "version": "0.2.0",
                        "python_path": "d3m.primitives.schema_discovery.profiler.Common",
                        "name": "Determine missing semantic types for columns automatically",
                        "digest": "812f8751faff8fa1fd614e29448206db50074486bae0fc127badaf8b04e127de"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "d510cb7a-1782-4f51-b44c-58f0236e47c7",
                        "version": "0.6.0",
                        "python_path": "d3m.primitives.data_transformation.column_parser.Common",
                        "name": "Parses strings into their types",
                        "digest": "96e020725140c0a67033e5e340c555514b0a5432179254c38813a4e85687528d"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.1.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                25
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "81d7e261-e25b-4721-b091-a31cd46e99ae",
                        "version": "0.1.0",
                        "python_path": "d3m.primitives.data_transformation.extract_columns.Common",
                        "name": "Extracts columns",
                        "digest": "f28a4eba07366d2cfe64dd5c5a6d95ae353e44b3e9a0ba899b9d7c19527241c3"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.2.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "columns": {
                            "type": "VALUE",
                            "data": [
                                6
                            ]
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "09f252eb-215d-4e0b-9a60-fcd967f5e708",
                        "version": "0.2.1",
                        "python_path": "d3m.primitives.data_transformation.encoder.DistilTextEncoder",
                        "name": "Text encoder",
                        "digest": "ca6c5d86bdae44671ffeeb05ab8c5796c1bddddf09624214ce1ab876ee004ce6"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.3.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ],
                    "hyperparams": {
                        "encoder_type": {
                            "type": "VALUE",
                            "data": "tfidf"
                        }
                    }
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "e0ad06ce-b484-46b0-a478-c567e1ea7e02",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.learner.random_forest.DistilEnsembleForest",
                        "name": "EnsembleForest",
                        "digest": "8572316447af3ae79687d2ae00ffe10a5c66b699198adfcaacce8d3678716bd7"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.5.produce"
                        },
                        "outputs": {
                            "type": "CONTAINER",
                            "data": "steps.4.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                },
                {
                    "type": "PRIMITIVE",
                    "primitive": {
                        "id": "8d38b340-f83f-4877-baaa-162f8e551736",
                        "version": "0.3.0",
                        "python_path": "d3m.primitives.data_transformation.construct_predictions.Common",
                        "name": "Construct pipeline predictions output",
                        "digest": "d597b7d1f1a28e331c710a0065c046d667d0e3b22e2b96c0be28d64d105e9d17"
                    },
                    "arguments": {
                        "inputs": {
                            "type": "CONTAINER",
                            "data": "steps.6.produce"
                        },
                        "reference": {
                            "type": "CONTAINER",
                            "data": "steps.0.produce"
                        }
                    },
                    "outputs": [
                        {
                            "id": "produce"
                        }
                    ]
                }
            ],
            "digest": "8adddc474a27e3bbafb065f3d8300e2fd41e77904b103dba86ac06705336107d",
            "_submitter": "dmc",
            "_ingest_timestamp": "2020-02-07T13:05:47.744389Z"
        }
    }
];
