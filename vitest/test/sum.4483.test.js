
import sum4483 from '../sum4483.js';
import { expect, test } from 'vitest';

test('adds 51 + 61 to equal 112 + offset 0.7324882313032777', () => {
  expect(sum4483(51, 61)).toBe(112 + 0.7324882313032777);
});
