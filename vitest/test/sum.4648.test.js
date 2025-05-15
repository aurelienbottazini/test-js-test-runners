
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 19 to equal 28', () => {
  expect(sum(9, 19)).toBe(28);
});
