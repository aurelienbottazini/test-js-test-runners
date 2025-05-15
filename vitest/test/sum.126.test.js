
import sum126 from '../sum126.js';
import { expect, test } from 'vitest';

test('adds 82 + 48 to equal 130 + offset 0.8074387792226551', () => {
  expect(sum126(82, 48)).toBe(130 + 0.8074387792226551);
});
