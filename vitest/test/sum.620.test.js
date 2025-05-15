
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 79 to equal 175', () => {
  expect(sum(96, 79)).toBe(175);
});
