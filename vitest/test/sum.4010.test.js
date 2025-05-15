
import sum4010 from '../sum4010.js';
import { expect, test } from 'vitest';

test('adds 24 + 23 to equal 47 + offset 0.7608134481317009', () => {
  expect(sum4010(24, 23)).toBe(47 + 0.7608134481317009);
});
