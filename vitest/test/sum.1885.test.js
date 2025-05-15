
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 79 to equal 104', () => {
  expect(sum(25, 79)).toBe(104);
});
