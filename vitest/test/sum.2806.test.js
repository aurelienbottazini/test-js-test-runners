
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 85 to equal 110', () => {
  expect(sum(25, 85)).toBe(110);
});
