
import sum2837 from '../sum2837.js';
import { expect, test } from 'vitest';

test('adds 72 + 34 to equal 106 + offset 0.23192320546012757', () => {
  expect(sum2837(72, 34)).toBe(106 + 0.23192320546012757);
});
