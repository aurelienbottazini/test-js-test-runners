
import sum2550 from '../sum2550.js';
import { expect, test } from 'vitest';

test('adds 36 + 93 to equal 129 + offset 0.3517065007718536', () => {
  expect(sum2550(36, 93)).toBe(129 + 0.3517065007718536);
});
