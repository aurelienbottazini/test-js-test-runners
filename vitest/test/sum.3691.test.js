
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 1 to equal 88', () => {
  expect(sum(87, 1)).toBe(88);
});
