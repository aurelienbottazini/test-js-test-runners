
import sum2939 from '../sum2939.js';
import { expect, test } from 'vitest';

test('adds 0 + 18 to equal 18 + offset 0.8648325146859356', () => {
  expect(sum2939(0, 18)).toBe(18 + 0.8648325146859356);
});
