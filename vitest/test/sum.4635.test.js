
import sum4635 from '../sum4635.js';
import { expect, test } from 'vitest';

test('adds 17 + 75 to equal 92 + offset 0.5442525628878976', () => {
  expect(sum4635(17, 75)).toBe(92 + 0.5442525628878976);
});
