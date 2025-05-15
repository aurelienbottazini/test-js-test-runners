
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 60 to equal 71', () => {
  expect(sum(11, 60)).toBe(71);
});
