
import sum2419 from '../sum2419.js';
import { expect, test } from 'vitest';

test('adds 87 + 79 to equal 166 + offset 0.7131593990306732', () => {
  expect(sum2419(87, 79)).toBe(166 + 0.7131593990306732);
});
