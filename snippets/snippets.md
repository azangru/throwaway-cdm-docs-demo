## 2020-10-16

## 2020-10-09

### GeneFamily

```json
{
    "type": "Gene Family",
    "members": {
        "ENSG0001": {"symbol":"BRCA1", "species":"homo_sapiens"},
        "ENSG0002": {...},
        ...
        "ENSG000N": {}
    },
    "model_id": "RFAM0001",
    "tree": "((ENSG0001,ENSG0002),ENSG000N)",
    "homologies": [
        {
            "source_gene": "ENSG0001",
            "target_gene": "ENSG0002",
            "type": "one2one ortholog",
            "perc_id": 100.0,
            "goc_score": 100,
            "wga_score": 99.5,
            "high_conf": 1
        },
        {
            "source_gene": "ENSG0001",
            "target_gene": "ENSG000N",
            "type": "other paralog",
            "perc_id": 79.9,
            "goc_score": 50,
            "wga_score": 60.4,
            "high_conf": 0,
        }
    ]
}
```


## 2020-11-06

### Alignments
```
{
    "type": "Whole Genome Alignment",
    "name": "mammals",
    "method": "LASTZ pairwise",
    "alignment_blocks": [
        Alignment, Alignment, ...
    ],
}

{
    "type": "Alignment",
    "sequences": [Aligned Sequence, Aligned Sequence, ...]
}

{
    "type": "Aligned Sequence",
    "assembly": Assembly,
    "unaligned_sequence": "AAAAGGGGGTTTT....",
    "slice": Slice,
    "cigar": [
        [5, 'X'], ['100', 'M'], ['200', 'D'], ['1', 'M']
    ],
}
```
