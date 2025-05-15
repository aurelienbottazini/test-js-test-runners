
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 19 to equal 110', () => {
  expect(sum(91, 19)).toBe(110);
});
