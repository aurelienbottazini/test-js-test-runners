
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 13 to equal 28', () => {
  expect(sum(15, 13)).toBe(28);
});
