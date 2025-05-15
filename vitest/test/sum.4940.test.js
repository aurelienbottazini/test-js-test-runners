
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 81 to equal 99', () => {
  expect(sum(18, 81)).toBe(99);
});
