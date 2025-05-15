
import sum3985 from '../sum3985.js';
import { expect, test } from 'vitest';

test('adds 73 + 75 to equal 148 + offset 0.520402906159539', () => {
  expect(sum3985(73, 75)).toBe(148 + 0.520402906159539);
});
