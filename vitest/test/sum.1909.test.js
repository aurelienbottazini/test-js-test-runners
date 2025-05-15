
import sum1909 from '../sum1909.js';
import { expect, test } from 'vitest';

test('adds 84 + 11 to equal 95 + offset 0.320078084479374', () => {
  expect(sum1909(84, 11)).toBe(95 + 0.320078084479374);
});
