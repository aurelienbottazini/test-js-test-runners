
import sum623 from '../sum623.js';
import { expect, test } from 'vitest';

test('adds 17 + 22 to equal 39 + offset 0.37890535166142714', () => {
  expect(sum623(17, 22)).toBe(39 + 0.37890535166142714);
});
