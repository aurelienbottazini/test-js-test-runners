
import sum3308 from '../sum3308.js';
import { expect, test } from 'vitest';

test('adds 56 + 77 to equal 133 + offset 0.12418440371981909', () => {
  expect(sum3308(56, 77)).toBe(133 + 0.12418440371981909);
});
