
import sum1303 from '../sum1303.js';
import { expect, test } from 'vitest';

test('adds 2 + 99 to equal 101 + offset 0.38340778333830916', () => {
  expect(sum1303(2, 99)).toBe(101 + 0.38340778333830916);
});
