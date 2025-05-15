
import sum3099 from '../sum3099.js';
import { expect, test } from 'vitest';

test('adds 69 + 61 to equal 130 + offset 0.9018803585051435', () => {
  expect(sum3099(69, 61)).toBe(130 + 0.9018803585051435);
});
