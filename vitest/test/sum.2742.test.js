
import sum2742 from '../sum2742.js';
import { expect, test } from 'vitest';

test('adds 33 + 40 to equal 73 + offset 0.8180670601662543', () => {
  expect(sum2742(33, 40)).toBe(73 + 0.8180670601662543);
});
