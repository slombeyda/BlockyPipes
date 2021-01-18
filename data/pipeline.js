let pipeline= {
    "_index": "pipelines_202002",
    "_type": "_doc",
    "_id": "65a3f0ea26154b8ba4a6ecceb924397fd50b85bd8b20fedfde79a1276c91c009",
    "_score": 9.086437,
    "_source": {
        "id": "b1e3d848-fa40-49fc-87d0-eab9c9453deb",
        "schema": "https://metadata.datadrivendiscovery.org/schemas/v0/pipeline.json",
        "created": "2019-07-03T06:11:00.017840Z",
        "inputs": [
            {
                "name": "inputs"
            }
        ],
        "outputs": [
            {
                "data": "steps.1.produce",
                "name": "output predictions"
            }
        ],
        "steps": [
            {
                "type": "PRIMITIVE",
                "primitive": {
                    "id": "f31f8c1f-d1c5-43e5-a4b2-2ae4a761ef2e",
                    "version": "0.2.0",
                    "python_path": "d3m.primitives.data_transformation.denormalize.Common",
                    "name": "Denormalize datasets",
                    "digest": "00ae7955cc0abce2a3ddee96247209f3395009ae6553c7ce8caa577e402754db"
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
                    "id": "2d6d3223-1b3c-49cc-9ddd-50f571818268",
                    "version": "1.0.2",
                    "python_path": "d3m.primitives.time_series_classification.k_neighbors.Kanine",
                    "name": "kanine",
                    "digest": "652c9e412f8413b934d2101f2f8b2fc750a1d090c7defec5bab6b8b5e52ca6d8"
                },
                "arguments": {
                    "outputs": {
                        "type": "CONTAINER",
                        "data": "steps.0.produce"
                    },
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
                    "n_neighbors": {
                        "type": "VALUE",
                        "data": 4
                    }
                }
            }
        ],
        "source": {
            "name": "mit16"
        },
        "digest": "65a3f0ea26154b8ba4a6ecceb924397fd50b85bd8b20fedfde79a1276c91c009",
        "_ingest_timestamp": "2019-07-03T07:09:26.317021"
    }
}
