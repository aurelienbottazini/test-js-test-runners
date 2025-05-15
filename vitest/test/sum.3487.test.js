
import sum3487 from '../sum3487.js';
import { expect, test } from 'vitest';

test('adds 50 + 19 to equal 69 + offset 0.0021866188817719623', () => {
  expect(sum3487(50, 19)).toBe(69 + 0.0021866188817719623);
});
