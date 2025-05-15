
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 84 to equal 151', () => {
  expect(sum(67, 84)).toBe(151);
});
