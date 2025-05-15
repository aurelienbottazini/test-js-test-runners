
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 19 to equal 31', () => {
  expect(sum(12, 19)).toBe(31);
});
