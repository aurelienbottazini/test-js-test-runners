
import sum1319 from '../sum1319.js';
import { expect, test } from 'vitest';

test('adds 47 + 90 to equal 137 + offset 0.6082903175040096', () => {
  expect(sum1319(47, 90)).toBe(137 + 0.6082903175040096);
});
