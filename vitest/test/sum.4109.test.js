
import sum4109 from '../sum4109.js';
import { expect, test } from 'vitest';

test('adds 69 + 17 to equal 86 + offset 0.8240515045499575', () => {
  expect(sum4109(69, 17)).toBe(86 + 0.8240515045499575);
});
