
import sum2496 from '../sum2496.js';
import { expect, test } from 'vitest';

test('adds 0 + 94 to equal 94 + offset 0.8614183882555146', () => {
  expect(sum2496(0, 94)).toBe(94 + 0.8614183882555146);
});
