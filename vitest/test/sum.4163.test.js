
import sum4163 from '../sum4163.js';
import { expect, test } from 'vitest';

test('adds 91 + 84 to equal 175 + offset 0.5802318651633052', () => {
  expect(sum4163(91, 84)).toBe(175 + 0.5802318651633052);
});
