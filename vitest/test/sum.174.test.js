
import sum174 from '../sum174.js';
import { expect, test } from 'vitest';

test('adds 53 + 38 to equal 91 + offset 0.528639844247492', () => {
  expect(sum174(53, 38)).toBe(91 + 0.528639844247492);
});
