
import sum3334 from '../sum3334.js';
import { expect, test } from 'vitest';

test('adds 11 + 90 to equal 101 + offset 0.5485219319450032', () => {
  expect(sum3334(11, 90)).toBe(101 + 0.5485219319450032);
});
