
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 19 to equal 30', () => {
  expect(sum(11, 19)).toBe(30);
});
