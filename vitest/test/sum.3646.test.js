
import sum3646 from '../sum3646.js';
import { expect, test } from 'vitest';

test('adds 73 + 38 to equal 111 + offset 0.4855635911503833', () => {
  expect(sum3646(73, 38)).toBe(111 + 0.4855635911503833);
});
