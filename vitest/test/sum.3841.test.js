
import sum3841 from '../sum3841.js';
import { expect, test } from 'vitest';

test('adds 84 + 24 to equal 108 + offset 0.354958259928292', () => {
  expect(sum3841(84, 24)).toBe(108 + 0.354958259928292);
});
