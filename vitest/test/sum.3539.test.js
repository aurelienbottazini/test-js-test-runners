
import sum3539 from '../sum3539.js';
import { expect, test } from 'vitest';

test('adds 73 + 24 to equal 97 + offset 0.9005396836111689', () => {
  expect(sum3539(73, 24)).toBe(97 + 0.9005396836111689);
});
