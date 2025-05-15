
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 8 to equal 59', () => {
  expect(sum(51, 8)).toBe(59);
});
