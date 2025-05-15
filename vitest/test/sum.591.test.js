
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 75 to equal 86', () => {
  expect(sum(11, 75)).toBe(86);
});
