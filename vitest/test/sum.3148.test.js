
import sum3148 from '../sum3148.js';
import { expect, test } from 'vitest';

test('adds 94 + 70 to equal 164 + offset 0.8561731108191196', () => {
  expect(sum3148(94, 70)).toBe(164 + 0.8561731108191196);
});
