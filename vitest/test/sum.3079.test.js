
import sum3079 from '../sum3079.js';
import { expect, test } from 'vitest';

test('adds 14 + 96 to equal 110 + offset 0.44544942724355685', () => {
  expect(sum3079(14, 96)).toBe(110 + 0.44544942724355685);
});
