
import sum3870 from '../sum3870.js';
import { expect, test } from 'vitest';

test('adds 2 + 60 to equal 62 + offset 0.08625334896601677', () => {
  expect(sum3870(2, 60)).toBe(62 + 0.08625334896601677);
});
