# Transcript

The Transcript data type describes one of the possible splicings for a gene. `Transcript` has the following fields:

| Field                       | Type                              | Description                         |
|-----------------------------|-----------------------------------|-------------------------------------|
| symbol                      | string                            | Short name
| relative_location           | RelativeLocation                  | Location of the transcript in relation to the gene
| stable_id                   | string                            | A unique identifier for the transcript
| version                     | integer                           | Version of the transcript
| type                        | string                            | The value is always `Transcript`
| so_term                     | string                            | Sequence Ontology accession describing the transcript biotype
| sequence                    | string                            | Genomic sequence on the forward strand from the lowest 5' end coordinate to the highest 3' end coordinate
| slice                       | Slice                             | Slice describing the coordinates of the transcript
| spliced_exons               | array of SplicedExon              | The ordered list of exons of the transcript
| introns                     | array of Intron                   | The ordered list of introns of the transcript
| product_generating_contexts | array of ProductGeneratingContext | see ProductGeneratingContext
| cdna                        | cDNA                              | A cDNA data type to provide the sequence after any possible post-transcriptional modifications

## Examples
```json
{
  "symbol": "BRCA2",
  "relative_location": {},
  "stable_id": "ENST00000380152",
  "version": 7,
  "type": "protein_coding",
  "so_term": "SO:0000010",
  "sequence": "AAGCTTTTGTAATTTTAAAAAATT",
  "slice": {},
  "spliced_exons": [],
  "introns": [],
  "product_generating_contexts": [],
  "cdna": {}
}
```
