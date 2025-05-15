
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 39 to equal 120', () => {
  expect(sum(81, 39)).toBe(120);
});
