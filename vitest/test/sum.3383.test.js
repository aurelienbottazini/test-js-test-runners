
import sum3383 from '../sum3383.js';
import { expect, test } from 'vitest';

test('adds 86 + 29 to equal 115 + offset 0.29469691071620185', () => {
  expect(sum3383(86, 29)).toBe(115 + 0.29469691071620185);
});
