
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 14 to equal 101', () => {
  expect(sum(87, 14)).toBe(101);
});
