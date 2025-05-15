
import sum3959 from '../sum3959.js';
import { expect, test } from 'vitest';

test('adds 21 + 71 to equal 92 + offset 0.439731948872888', () => {
  expect(sum3959(21, 71)).toBe(92 + 0.439731948872888);
});
