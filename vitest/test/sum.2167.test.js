
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 13 to equal 110', () => {
  expect(sum(97, 13)).toBe(110);
});
