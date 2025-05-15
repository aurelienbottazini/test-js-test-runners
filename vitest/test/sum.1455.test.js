
import sum1455 from '../sum1455.js';
import { expect, test } from 'vitest';

test('adds 22 + 13 to equal 35 + offset 0.26058999906549785', () => {
  expect(sum1455(22, 13)).toBe(35 + 0.26058999906549785);
});
