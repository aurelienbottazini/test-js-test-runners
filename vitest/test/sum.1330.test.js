
import sum1330 from '../sum1330.js';
import { expect, test } from 'vitest';

test('adds 68 + 16 to equal 84 + offset 0.7591262192841252', () => {
  expect(sum1330(68, 16)).toBe(84 + 0.7591262192841252);
});
