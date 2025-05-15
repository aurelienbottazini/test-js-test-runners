
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 19 to equal 100', () => {
  expect(sum(81, 19)).toBe(100);
});
