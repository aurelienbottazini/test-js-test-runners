
import sum2907 from '../sum2907.js';
import { expect, test } from 'vitest';

test('adds 10 + 38 to equal 48 + offset 0.9381571465451315', () => {
  expect(sum2907(10, 38)).toBe(48 + 0.9381571465451315);
});
