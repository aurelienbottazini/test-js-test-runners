
import sum3178 from '../sum3178.js';
import { expect, test } from 'vitest';

test('adds 57 + 72 to equal 129 + offset 0.7469167213305938', () => {
  expect(sum3178(57, 72)).toBe(129 + 0.7469167213305938);
});
