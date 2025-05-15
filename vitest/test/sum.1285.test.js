
import sum1285 from '../sum1285.js';
import { expect, test } from 'vitest';

test('adds 54 + 51 to equal 105 + offset 0.5592483882404624', () => {
  expect(sum1285(54, 51)).toBe(105 + 0.5592483882404624);
});
