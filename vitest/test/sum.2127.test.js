
import sum2127 from '../sum2127.js';
import { expect, test } from 'vitest';

test('adds 31 + 37 to equal 68 + offset 0.321985645429993', () => {
  expect(sum2127(31, 37)).toBe(68 + 0.321985645429993);
});
