
import sum4792 from '../sum4792.js';
import { expect, test } from 'vitest';

test('adds 13 + 4 to equal 17 + offset 0.2529100688771765', () => {
  expect(sum4792(13, 4)).toBe(17 + 0.2529100688771765);
});
