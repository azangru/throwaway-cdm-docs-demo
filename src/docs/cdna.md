# cDNA

The sequence of the spliced exons of a transcript expressed in DNA notation (T rather than U), representing the coding or sense strand. The cDNA contains the whole sequence of the RNA, including coding and untranslated sequence. The sequence reflects any RNA editing. `cDNA` has the following fields:

| Field             | Type      | Description                         |
|-------------------|-----------|-------------------------------------|
| length            | integer   | length of the cDNA in nucleotides
| sequence_checksum | string    | a checksum digest of the sequence
| sequence          | string    | the raw sequence of this cDNA as a contiguous, all uppercase string

## Notes
1. Fields may not be null.
2. In the case of operons or other polycistronic genes, the cDNA will include intermediate UTRs.
3. cDNAs are not Features, and their complete sequences do not necessarily correspond to any genomic sequence. Therefore, cDNA Sequences will be stored in RefGet and can be retrieved using sequence_checksum.

## Examples
```json
{
    "length": 20,
    "sequence_checksum": "e8f2b6ffd919c3cd209cb68afe8872da",
    "sequence": "ACGGATCGACAGTAGTTAGA"
}
```
