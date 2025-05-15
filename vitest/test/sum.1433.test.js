
import sum1433 from '../sum1433.js';
import { expect, test } from 'vitest';

test('adds 90 + 45 to equal 135 + offset 0.5993266131588713', () => {
  expect(sum1433(90, 45)).toBe(135 + 0.5993266131588713);
});
