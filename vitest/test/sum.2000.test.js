
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 18 to equal 102', () => {
  expect(sum(84, 18)).toBe(102);
});
