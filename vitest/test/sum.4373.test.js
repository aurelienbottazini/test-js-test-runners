
import sum4373 from '../sum4373.js';
import { expect, test } from 'vitest';

test('adds 27 + 95 to equal 122 + offset 0.10149176919392888', () => {
  expect(sum4373(27, 95)).toBe(122 + 0.10149176919392888);
});
