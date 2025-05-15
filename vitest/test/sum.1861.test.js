
import sum1861 from '../sum1861.js';
import { expect, test } from 'vitest';

test('adds 1 + 24 to equal 25 + offset 0.037568354082505806', () => {
  expect(sum1861(1, 24)).toBe(25 + 0.037568354082505806);
});
