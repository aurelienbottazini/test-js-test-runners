
import sum2051 from '../sum2051.js';
import { expect, test } from 'vitest';

test('adds 67 + 86 to equal 153 + offset 0.4962458682467681', () => {
  expect(sum2051(67, 86)).toBe(153 + 0.4962458682467681);
});
