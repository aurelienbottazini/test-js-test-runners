
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 19 to equal 20', () => {
  expect(sum(1, 19)).toBe(20);
});
