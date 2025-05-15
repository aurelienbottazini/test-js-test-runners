
import sum2819 from '../sum2819.js';
import { expect, test } from 'vitest';

test('adds 17 + 52 to equal 69 + offset 0.9827130218367482', () => {
  expect(sum2819(17, 52)).toBe(69 + 0.9827130218367482);
});
