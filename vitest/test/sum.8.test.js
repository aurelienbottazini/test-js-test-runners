
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 19 to equal 71', () => {
  expect(sum(52, 19)).toBe(71);
});
