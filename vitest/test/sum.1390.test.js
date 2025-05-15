
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 33 to equal 132', () => {
  expect(sum(99, 33)).toBe(132);
});
