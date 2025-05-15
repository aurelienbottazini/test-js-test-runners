
import sum4049 from '../sum4049.js';
import { expect, test } from 'vitest';

test('adds 76 + 28 to equal 104 + offset 0.05483323381072558', () => {
  expect(sum4049(76, 28)).toBe(104 + 0.05483323381072558);
});
