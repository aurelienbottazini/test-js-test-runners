
import sum2841 from '../sum2841.js';
import { expect, test } from 'vitest';

test('adds 45 + 56 to equal 101 + offset 0.3551768950353038', () => {
  expect(sum2841(45, 56)).toBe(101 + 0.3551768950353038);
});
