
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 79 to equal 150', () => {
  expect(sum(71, 79)).toBe(150);
});
