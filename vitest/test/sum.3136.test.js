
import sum3136 from '../sum3136.js';
import { expect, test } from 'vitest';

test('adds 28 + 71 to equal 99 + offset 0.8940576410638149', () => {
  expect(sum3136(28, 71)).toBe(99 + 0.8940576410638149);
});
