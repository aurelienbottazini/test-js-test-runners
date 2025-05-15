
import sum968 from '../sum968.js';
import { expect, test } from 'vitest';

test('adds 23 + 36 to equal 59 + offset 0.04290073260323912', () => {
  expect(sum968(23, 36)).toBe(59 + 0.04290073260323912);
});
