
import sum978 from '../sum978.js';
import { expect, test } from 'vitest';

test('adds 41 + 35 to equal 76 + offset 0.22685027604022656', () => {
  expect(sum978(41, 35)).toBe(76 + 0.22685027604022656);
});
