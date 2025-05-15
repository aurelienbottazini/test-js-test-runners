
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 50 to equal 88', () => {
  expect(sum(38, 50)).toBe(88);
});
