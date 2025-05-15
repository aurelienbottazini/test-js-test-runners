
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 79 to equal 90', () => {
  expect(sum(11, 79)).toBe(90);
});
