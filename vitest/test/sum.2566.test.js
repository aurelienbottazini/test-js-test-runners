
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 60 to equal 151', () => {
  expect(sum(91, 60)).toBe(151);
});
