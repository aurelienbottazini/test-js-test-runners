
import sum894 from '../sum894.js';
import { expect, test } from 'vitest';

test('adds 48 + 37 to equal 85 + offset 0.14158788295961255', () => {
  expect(sum894(48, 37)).toBe(85 + 0.14158788295961255);
});
