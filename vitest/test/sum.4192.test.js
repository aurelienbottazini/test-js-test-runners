
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 79 to equal 154', () => {
  expect(sum(75, 79)).toBe(154);
});
