
import sum96 from '../sum96.js';
import { expect, test } from 'vitest';

test('adds 82 + 58 to equal 140 + offset 0.9357161113050756', () => {
  expect(sum96(82, 58)).toBe(140 + 0.9357161113050756);
});
