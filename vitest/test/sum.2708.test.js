
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 8 to equal 91', () => {
  expect(sum(83, 8)).toBe(91);
});
