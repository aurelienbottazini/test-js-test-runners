
import sum3346 from '../sum3346.js';
import { expect, test } from 'vitest';

test('adds 29 + 2 to equal 31 + offset 0.8393936887424998', () => {
  expect(sum3346(29, 2)).toBe(31 + 0.8393936887424998);
});
