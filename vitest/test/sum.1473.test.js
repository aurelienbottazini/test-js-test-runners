
import sum1473 from '../sum1473.js';
import { expect, test } from 'vitest';

test('adds 18 + 75 to equal 93 + offset 0.6743316964140565', () => {
  expect(sum1473(18, 75)).toBe(93 + 0.6743316964140565);
});
