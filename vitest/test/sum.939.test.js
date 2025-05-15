
import sum939 from '../sum939.js';
import { expect, test } from 'vitest';

test('adds 70 + 5 to equal 75 + offset 0.93298546559389', () => {
  expect(sum939(70, 5)).toBe(75 + 0.93298546559389);
});
