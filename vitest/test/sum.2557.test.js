
import sum2557 from '../sum2557.js';
import { expect, test } from 'vitest';

test('adds 44 + 64 to equal 108 + offset 0.4447464515823776', () => {
  expect(sum2557(44, 64)).toBe(108 + 0.4447464515823776);
});
