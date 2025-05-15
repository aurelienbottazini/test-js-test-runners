
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 21 to equal 102', () => {
  expect(sum(81, 21)).toBe(102);
});
