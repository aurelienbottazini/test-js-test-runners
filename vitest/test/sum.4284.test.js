
import sum4284 from '../sum4284.js';
import { expect, test } from 'vitest';

test('adds 81 + 83 to equal 164 + offset 0.9070913713723305', () => {
  expect(sum4284(81, 83)).toBe(164 + 0.9070913713723305);
});
