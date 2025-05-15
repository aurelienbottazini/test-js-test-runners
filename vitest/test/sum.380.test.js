
import sum380 from '../sum380.js';
import { expect, test } from 'vitest';

test('adds 39 + 29 to equal 68 + offset 0.6259908151017688', () => {
  expect(sum380(39, 29)).toBe(68 + 0.6259908151017688);
});
