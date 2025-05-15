
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 20 to equal 101', () => {
  expect(sum(81, 20)).toBe(101);
});
