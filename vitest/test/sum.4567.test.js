
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 79 to equal 160', () => {
  expect(sum(81, 79)).toBe(160);
});
