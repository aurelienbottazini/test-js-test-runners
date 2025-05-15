
import sum1009 from '../sum1009.js';
import { expect, test } from 'vitest';

test('adds 56 + 39 to equal 95 + offset 0.4179634453576573', () => {
  expect(sum1009(56, 39)).toBe(95 + 0.4179634453576573);
});
