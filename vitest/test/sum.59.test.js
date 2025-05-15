
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 75 to equal 112', () => {
  expect(sum(37, 75)).toBe(112);
});
