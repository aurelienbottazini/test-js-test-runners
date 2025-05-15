
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 44 to equal 101', () => {
  expect(sum(57, 44)).toBe(101);
});
