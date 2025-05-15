
import sum4306 from '../sum4306.js';
import { expect, test } from 'vitest';

test('adds 66 + 66 to equal 132 + offset 0.5143811111464563', () => {
  expect(sum4306(66, 66)).toBe(132 + 0.5143811111464563);
});
