# cDNA

The cDNA data type describes the complimentary DNA to the RNA product of a transcript. In biological terms, the cDNA represents the compliment of the messenger (or other) RNA, after any splicing and RNA-editing. `cDNA` has the following fields:

| Field             | Type      | Description                         |
|-------------------|-----------|-------------------------------------|
| length            | integer   | length of the cDNA in nucleotides
| sequence_checksum | string    | a checksum digest of the sequence
| sequence          | Sequence  | the raw sequence of this cDNA

## Notes
1. Fields may not be null.
2. In the case of operons or other polycistronic genes, the cDNA will include intermediate UTRs.

## Examples
```json
{
    "length": 20,
    "sequence_checksum": "md5:e8f2b6ffd919c3cd209cb68afe8872da",
    "sequence": {
        "alphabet": "DNA",
        "value": "ACGGATCGACAGTAGTTAGA",
        "type": "inline",
        "checksum": "md5:e8f2b6ffd919c3cd209cb68afe8872da"
    }
}
```
