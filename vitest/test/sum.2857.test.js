
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 84 to equal 110', () => {
  expect(sum(26, 84)).toBe(110);
});
