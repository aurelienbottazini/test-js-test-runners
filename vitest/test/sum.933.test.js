
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 41 to equal 121', () => {
  expect(sum(80, 41)).toBe(121);
});
