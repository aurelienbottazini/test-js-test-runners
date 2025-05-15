
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 19 to equal 72', () => {
  expect(sum(53, 19)).toBe(72);
});
