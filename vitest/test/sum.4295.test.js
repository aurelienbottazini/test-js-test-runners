
import sum4295 from '../sum4295.js';
import { expect, test } from 'vitest';

test('adds 52 + 29 to equal 81 + offset 0.5024105660896551', () => {
  expect(sum4295(52, 29)).toBe(81 + 0.5024105660896551);
});
