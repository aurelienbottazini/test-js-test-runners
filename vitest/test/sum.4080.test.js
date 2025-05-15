
import sum4080 from '../sum4080.js';
import { expect, test } from 'vitest';

test('adds 34 + 46 to equal 80 + offset 0.590102044138443', () => {
  expect(sum4080(34, 46)).toBe(80 + 0.590102044138443);
});
