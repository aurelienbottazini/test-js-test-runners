
import sum4171 from '../sum4171.js';
import { expect, test } from 'vitest';

test('adds 26 + 59 to equal 85 + offset 0.4810088428727973', () => {
  expect(sum4171(26, 59)).toBe(85 + 0.4810088428727973);
});
