
import sum1335 from '../sum1335.js';
import { expect, test } from 'vitest';

test('adds 89 + 24 to equal 113 + offset 0.7616542699512082', () => {
  expect(sum1335(89, 24)).toBe(113 + 0.7616542699512082);
});
