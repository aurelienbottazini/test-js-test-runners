
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 71 to equal 151', () => {
  expect(sum(80, 71)).toBe(151);
});
