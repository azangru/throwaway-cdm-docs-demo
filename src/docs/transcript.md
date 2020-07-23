# Transcript

The Transcript data type describes one of the possible splicing for a gene. `Transcript` has the following fields:

| Field             | Type             | Description                         |
|-------------------|------------------|-------------------------------------|
| symbol            | string           | Short name
| relative_location | RelativeLocation | Location of the transcript in relation to the gene
| stable_id         | string           | A unique identifier for the gene
| version           | string           | Version of the gene
| type              | string           | The type describing functionality of the gene such as `protein_coding`
| so_term           | string           | Sequence Ontology accession describing the transcript type
| sequence          | string           | Genomic sequence on the forward strand from the lowest 5' end coordinate to the highest 3' end coordinate
| slice             | array of Slice   | List of slices to be able to place the transcript in one or multiple coordinate system.
| exons             | array of Exon    | The ordered list of exons of the transcript
| introns           | array of Intron  | The ordered list of introns of the transcript
| cdna              | cDNA             | A cDNA data type to provide the sequence after any possible post-transcriptional modifications

## Examples
```json
{
  "symbol": "BRCA2",
  "stable_id": "ENST00000380152",
  "version": "7",
  "type": "protein_coding",
  "so_term": "SO:0000010",
  "sequence": "AAGCTTTTGTAATTTTAAAAAATT",
  "slice": [],
  "exons": [],
  "introns": [],
  "product_generating_context": [],
  "cdna": {}
}
```
