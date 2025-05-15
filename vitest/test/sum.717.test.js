
import sum717 from '../sum717.js';
import { expect, test } from 'vitest';

test('adds 15 + 22 to equal 37 + offset 0.31983616265461945', () => {
  expect(sum717(15, 22)).toBe(37 + 0.31983616265461945);
});
