
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 52 to equal 71', () => {
  expect(sum(19, 52)).toBe(71);
});
