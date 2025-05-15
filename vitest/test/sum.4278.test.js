
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 75 to equal 154', () => {
  expect(sum(79, 75)).toBe(154);
});
