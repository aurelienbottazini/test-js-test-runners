
import sum3257 from '../sum3257.js';
import { expect, test } from 'vitest';

test('adds 69 + 11 to equal 80 + offset 0.6861182455618763', () => {
  expect(sum3257(69, 11)).toBe(80 + 0.6861182455618763);
});
