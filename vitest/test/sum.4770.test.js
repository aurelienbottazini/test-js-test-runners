
import sum4770 from '../sum4770.js';
import { expect, test } from 'vitest';

test('adds 65 + 76 to equal 141 + offset 0.4938686708845148', () => {
  expect(sum4770(65, 76)).toBe(141 + 0.4938686708845148);
});
