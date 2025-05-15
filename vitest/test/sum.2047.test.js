
import sum2047 from '../sum2047.js';
import { expect, test } from 'vitest';

test('adds 17 + 13 to equal 30 + offset 0.6082661852443246', () => {
  expect(sum2047(17, 13)).toBe(30 + 0.6082661852443246);
});
