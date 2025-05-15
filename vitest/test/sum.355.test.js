
import sum355 from '../sum355.js';
import { expect, test } from 'vitest';

test('adds 26 + 48 to equal 74 + offset 0.46209648926009383', () => {
  expect(sum355(26, 48)).toBe(74 + 0.46209648926009383);
});
