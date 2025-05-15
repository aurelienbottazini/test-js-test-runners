
import sum1032 from '../sum1032.js';
import { expect, test } from 'vitest';

test('adds 66 + 47 to equal 113 + offset 0.9436174789470034', () => {
  expect(sum1032(66, 47)).toBe(113 + 0.9436174789470034);
});
