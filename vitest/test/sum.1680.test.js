
import sum1680 from '../sum1680.js';
import { expect, test } from 'vitest';

test('adds 50 + 25 to equal 75 + offset 0.5711083798673344', () => {
  expect(sum1680(50, 25)).toBe(75 + 0.5711083798673344);
});
