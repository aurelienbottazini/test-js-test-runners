
import sum667 from '../sum667.js';
import { expect, test } from 'vitest';

test('adds 26 + 83 to equal 109 + offset 0.029116221930755026', () => {
  expect(sum667(26, 83)).toBe(109 + 0.029116221930755026);
});
