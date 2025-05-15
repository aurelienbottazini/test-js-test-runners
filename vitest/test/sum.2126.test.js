
import sum2126 from '../sum2126.js';
import { expect, test } from 'vitest';

test('adds 75 + 73 to equal 148 + offset 0.366485971502472', () => {
  expect(sum2126(75, 73)).toBe(148 + 0.366485971502472);
});
