
import sum964 from '../sum964.js';
import { expect, test } from 'vitest';

test('adds 88 + 17 to equal 105 + offset 0.9664762281727592', () => {
  expect(sum964(88, 17)).toBe(105 + 0.9664762281727592);
});
