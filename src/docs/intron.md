# Intron

The `Intron` data type describes the releative location of an intron in a `Transcript`.

Intron has the following fields:

| Field             | Type             | Description |
|-------------------|------------------|-------------|
| index             | integer          | Index of Intron
| relative_location | RelativeLocation | see RelativeLocation

## Notes
1. All introns that make up a transcript are stored together in a list called introns. The index of an intron reflectes the postion of the intron relative to its surrounding introns. The order is determined by the alternating pattern of exons and introns in a transcript.
2. Intron is not a feature. 

## Examples
```json
{
  "index": 0,
  "relative_location": {
    "start": 110,
    "end": 910,
    "length": 801                                                                                                                                                                                                                 }
}
```
