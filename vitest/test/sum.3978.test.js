
import sum3978 from '../sum3978.js';
import { expect, test } from 'vitest';

test('adds 38 + 32 to equal 70 + offset 0.989106512152427', () => {
  expect(sum3978(38, 32)).toBe(70 + 0.989106512152427);
});
