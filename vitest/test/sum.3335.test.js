
import sum3335 from '../sum3335.js';
import { expect, test } from 'vitest';

test('adds 23 + 43 to equal 66 + offset 0.22623102942096573', () => {
  expect(sum3335(23, 43)).toBe(66 + 0.22623102942096573);
});
