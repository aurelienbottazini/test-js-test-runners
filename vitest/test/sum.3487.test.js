
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 41 to equal 132', () => {
  expect(sum(91, 41)).toBe(132);
});
