
import sum163 from '../sum163.js';
import { expect, test } from 'vitest';

test('adds 38 + 78 to equal 116 + offset 0.7677205119862656', () => {
  expect(sum163(38, 78)).toBe(116 + 0.7677205119862656);
});
