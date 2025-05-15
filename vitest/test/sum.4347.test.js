
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 9 to equal 28', () => {
  expect(sum(19, 9)).toBe(28);
});
