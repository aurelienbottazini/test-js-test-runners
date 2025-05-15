
import sum2306 from '../sum2306.js';
import { expect, test } from 'vitest';

test('adds 5 + 24 to equal 29 + offset 0.0008898020256047356', () => {
  expect(sum2306(5, 24)).toBe(29 + 0.0008898020256047356);
});
