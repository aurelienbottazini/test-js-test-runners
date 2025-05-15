
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 61 to equal 140', () => {
  expect(sum(79, 61)).toBe(140);
});
