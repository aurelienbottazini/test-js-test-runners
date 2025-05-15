
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 79 to equal 140', () => {
  expect(sum(61, 79)).toBe(140);
});
