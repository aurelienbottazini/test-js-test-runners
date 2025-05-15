
import sum552 from '../sum552.js';
import { expect, test } from 'vitest';

test('adds 66 + 51 to equal 117 + offset 0.6543510620409968', () => {
  expect(sum552(66, 51)).toBe(117 + 0.6543510620409968);
});
