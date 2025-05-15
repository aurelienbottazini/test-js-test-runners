
import sum1464 from '../sum1464.js';
import { expect, test } from 'vitest';

test('adds 19 + 77 to equal 96 + offset 0.8127266342709237', () => {
  expect(sum1464(19, 77)).toBe(96 + 0.8127266342709237);
});
