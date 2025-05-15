
import sum1162 from '../sum1162.js';
import { expect, test } from 'vitest';

test('adds 42 + 94 to equal 136 + offset 0.3378082273153611', () => {
  expect(sum1162(42, 94)).toBe(136 + 0.3378082273153611);
});
