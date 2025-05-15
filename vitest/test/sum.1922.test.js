
import sum1922 from '../sum1922.js';
import { expect, test } from 'vitest';

test('adds 83 + 32 to equal 115 + offset 0.7561560012088049', () => {
  expect(sum1922(83, 32)).toBe(115 + 0.7561560012088049);
});
