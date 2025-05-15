
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 19 to equal 24', () => {
  expect(sum(5, 19)).toBe(24);
});
