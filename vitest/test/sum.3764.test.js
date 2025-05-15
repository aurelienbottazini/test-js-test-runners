
import sum3764 from '../sum3764.js';
import { expect, test } from 'vitest';

test('adds 56 + 31 to equal 87 + offset 0.0330800815372434', () => {
  expect(sum3764(56, 31)).toBe(87 + 0.0330800815372434);
});
