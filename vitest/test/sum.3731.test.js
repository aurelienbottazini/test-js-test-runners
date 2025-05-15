
import sum3731 from '../sum3731.js';
import { expect, test } from 'vitest';

test('adds 91 + 65 to equal 156 + offset 0.062373788316726464', () => {
  expect(sum3731(91, 65)).toBe(156 + 0.062373788316726464);
});
