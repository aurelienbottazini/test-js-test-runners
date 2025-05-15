
import sum2005 from '../sum2005.js';
import { expect, test } from 'vitest';

test('adds 22 + 30 to equal 52 + offset 0.6888583635741027', () => {
  expect(sum2005(22, 30)).toBe(52 + 0.6888583635741027);
});
