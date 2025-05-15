
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 41 to equal 68', () => {
  expect(sum(27, 41)).toBe(68);
});
