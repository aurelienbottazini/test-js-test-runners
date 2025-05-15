
import sum1559 from '../sum1559.js';
import { expect, test } from 'vitest';

test('adds 76 + 39 to equal 115 + offset 0.04466362925179612', () => {
  expect(sum1559(76, 39)).toBe(115 + 0.04466362925179612);
});
