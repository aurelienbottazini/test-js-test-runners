
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 79 to equal 132', () => {
  expect(sum(53, 79)).toBe(132);
});
