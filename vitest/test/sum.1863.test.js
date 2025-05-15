
import sum1863 from '../sum1863.js';
import { expect, test } from 'vitest';

test('adds 64 + 20 to equal 84 + offset 0.8085104665970247', () => {
  expect(sum1863(64, 20)).toBe(84 + 0.8085104665970247);
});
