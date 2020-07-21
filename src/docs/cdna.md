# cDNA

The cDNA data type describes the complimentary DNA to the RNA product of a transcript. In biological terms, the cDNA represents the compliment of the messenger (or other) RNA, after any splicing and RNA-editing. `cDNA` has the following fields:

| Field             | Type      | Description                         |
|-------------------|-----------|-------------------------------------|
| length            | integer   | length of the cDNA in nucleotides
| sequence_checksum | string    | a checksum digest of the sequence
| sequence          | string    | the raw sequence of this cDNA as a contiguous, all uppercase string

## Notes
1. Fields may not be null.
2. In the case of operons or other polycistronic genes, the cDNA will include intermediate UTRs.
3. cDNAs are not Features, and their sequences do not necessarily correspond to any genomic sequence. Therefore, cDNA Sequences will be stored in RefGet and can be retrieved using sequence_checksum.

## Examples
```json
{
    "length": 20,
    "sequence_checksum": "md5:e8f2b6ffd919c3cd209cb68afe8872da",
    "sequence": "ACGGATCGACAGTAGTTAGA"
}
```
