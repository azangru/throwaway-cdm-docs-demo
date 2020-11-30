# Species

The Species data type contains information sufficient to describe a given species. It consists of the following fields:

| Field                     | Type             | Description                               | 
|---------------------------|------------------|-------------------------------------------|
| scientific_name           | string           | Scientific name of the species.           | 
| common_name               | string or null   | Common or familiar name of the species.   | 
| display_name              | string           | Preferred name for display purposes       | 
| alternative_names         | array of strings | Alternative names (if any)                | 
| taxon_id                  | integer          | Taxonomic identifier.                     | 


## Examples

1. Representation of Human:

```json
{
  "scientific_name": "Homo sapiens",
  "common_name": "human",
  "display_name": "human",
  "alternative_names": ["man"],
  "taxon_id": 9606
}
```

2. Representation of Cow:

```json
{
  "scientific_name": "Bos taurus",
  "common_name": "cattle",
  "display_name": "cow",
  "alternative_names": ["bovine", "cow", "dairy cow", "domestic cattle", "domestic cow"],
  "taxon_id": 9606
}
```

3. Representation of Thermotomaculum hydrothermale:

```json
{
  "scientific_name": "Thermotomaculum hydrothermale",
  "common_name": null,
  "display_name": "thermotomaculum hydrothermale",
  "alternative_names": [],
  "taxon_id": 981385
}
```

