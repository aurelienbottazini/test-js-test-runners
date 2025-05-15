
import sum357 from '../sum357.js';
import { expect, test } from 'vitest';

test('adds 19 + 50 to equal 69 + offset 0.9224788391346334', () => {
  expect(sum357(19, 50)).toBe(69 + 0.9224788391346334);
});
