
import sum2311 from '../sum2311.js';
import { expect, test } from 'vitest';

test('adds 93 + 44 to equal 137 + offset 0.18203898600973978', () => {
  expect(sum2311(93, 44)).toBe(137 + 0.18203898600973978);
});
