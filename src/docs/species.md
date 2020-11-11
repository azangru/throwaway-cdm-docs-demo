# Species

The Species data type contains information sufficient to describe a given species. It consists of the following fields:

| Field               | Type             | Description                               |
|---------------------|------------------|-------------------------------------------|
| scientific_name     | string           | Scientific name of the species.
| name                | string or null   | Common or familiar name of the species.
| taxon_id            | integer          | Taxonomic identifier.

## Examples

1. Representation of Human:

```json
{
  "scientific_name": "Homo sapiens",
  "name": "human",
  "taxon_id": 9606
}
```

2. Representation of Thermotomaculum hydrothermale (NB: no familiar name available):

```json
{
  "scientific_name": "Thermotomaculum hydrothermale",
  "name": null,
  "taxon_id": 981385
}
```
