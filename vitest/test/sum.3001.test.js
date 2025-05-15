
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 39 to equal 135', () => {
  expect(sum(96, 39)).toBe(135);
});
