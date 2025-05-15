
import sum2952 from '../sum2952.js';
import { expect, test } from 'vitest';

test('adds 6 + 94 to equal 100 + offset 0.0951756208650858', () => {
  expect(sum2952(6, 94)).toBe(100 + 0.0951756208650858);
});
