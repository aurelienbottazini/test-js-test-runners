
import sum185 from '../sum185.js';
import { expect, test } from 'vitest';

test('adds 1 + 18 to equal 19 + offset 0.14023972266933227', () => {
  expect(sum185(1, 18)).toBe(19 + 0.14023972266933227);
});
