
import sum4333 from '../sum4333.js';
import { expect, test } from 'vitest';

test('adds 99 + 66 to equal 165 + offset 0.7705479350900547', () => {
  expect(sum4333(99, 66)).toBe(165 + 0.7705479350900547);
});
