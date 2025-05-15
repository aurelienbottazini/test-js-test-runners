
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 76 to equal 163', () => {
  expect(sum(87, 76)).toBe(163);
});
