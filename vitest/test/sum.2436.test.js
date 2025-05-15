
import sum2436 from '../sum2436.js';
import { expect, test } from 'vitest';

test('adds 69 + 83 to equal 152 + offset 0.9499395597848154', () => {
  expect(sum2436(69, 83)).toBe(152 + 0.9499395597848154);
});
