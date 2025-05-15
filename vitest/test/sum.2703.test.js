
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 8 to equal 26', () => {
  expect(sum(18, 8)).toBe(26);
});
