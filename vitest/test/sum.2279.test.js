
import sum2279 from '../sum2279.js';
import { expect, test } from 'vitest';

test('adds 21 + 30 to equal 51 + offset 0.6538964344129057', () => {
  expect(sum2279(21, 30)).toBe(51 + 0.6538964344129057);
});
