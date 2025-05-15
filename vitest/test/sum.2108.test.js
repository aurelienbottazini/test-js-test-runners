
import sum2108 from '../sum2108.js';
import { expect, test } from 'vitest';

test('adds 0 + 48 to equal 48 + offset 0.9375448865619145', () => {
  expect(sum2108(0, 48)).toBe(48 + 0.9375448865619145);
});
