
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 65 to equal 151', () => {
  expect(sum(86, 65)).toBe(151);
});
