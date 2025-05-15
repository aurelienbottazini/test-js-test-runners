
import sum4028 from '../sum4028.js';
import { expect, test } from 'vitest';

test('adds 87 + 75 to equal 162 + offset 0.8907056772117742', () => {
  expect(sum4028(87, 75)).toBe(162 + 0.8907056772117742);
});
