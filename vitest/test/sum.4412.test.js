
import sum4412 from '../sum4412.js';
import { expect, test } from 'vitest';

test('adds 50 + 49 to equal 99 + offset 0.1930519110270954', () => {
  expect(sum4412(50, 49)).toBe(99 + 0.1930519110270954);
});
