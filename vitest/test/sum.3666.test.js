
import sum3666 from '../sum3666.js';
import { expect, test } from 'vitest';

test('adds 37 + 23 to equal 60 + offset 0.9404065110173428', () => {
  expect(sum3666(37, 23)).toBe(60 + 0.9404065110173428);
});
