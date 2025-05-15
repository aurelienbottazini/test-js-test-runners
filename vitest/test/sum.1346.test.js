
import sum1346 from '../sum1346.js';
import { expect, test } from 'vitest';

test('adds 79 + 15 to equal 94 + offset 0.12041079898118057', () => {
  expect(sum1346(79, 15)).toBe(94 + 0.12041079898118057);
});
