
import sum1372 from '../sum1372.js';
import { expect, test } from 'vitest';

test('adds 68 + 24 to equal 92 + offset 0.27760932283451656', () => {
  expect(sum1372(68, 24)).toBe(92 + 0.27760932283451656);
});
