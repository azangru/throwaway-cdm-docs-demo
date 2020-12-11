# Species

The Species data type contains information sufficient to describe a given species. It consists of the following fields:

| Field                     | Type             | Description                               | 
|---------------------------|------------------|-------------------------------------------|
| scientific_name           | string           | Scientific name of the species.           
| ncbi_common_name          | string or null   | Common name of the species from NCBI.     
| common_name               | string or null   | Preferred name for display purposes, which can be the same as NCBI's common name       
| alternative_names         | array of strings | Alternative names (if any)                 
| taxon_id                  | integer          | Taxonomic identifier.                     


## Examples

1. Representation of Cow:

```json
{
  "scientific_name": "Bos taurus",
  "ncbi_common_name": "cattle",
  "common_name": "cow",
  "alternative_names": ["bovine", "cow", "dairy cow", "domestic cattle", "domestic cow"],
  "taxon_id": 9913
}
```

2. Escherichia coli — notice that the common_name field can now contain Ensembl's preferred abbreviated name

```json
{
  "scientific_name": "Escherichia coli str. K-12 substr. MG1655",
  "ncbi_common_name": null, 
  "common_name": "E. coli K-12",
  "alternative_names": [],
  "taxon_id": 511145
}
```

