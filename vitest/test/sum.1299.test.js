
import sum1299 from '../sum1299.js';
import { expect, test } from 'vitest';

test('adds 54 + 99 to equal 153 + offset 0.5374531743824612', () => {
  expect(sum1299(54, 99)).toBe(153 + 0.5374531743824612);
});
