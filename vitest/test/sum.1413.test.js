
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 60 to equal 91', () => {
  expect(sum(31, 60)).toBe(91);
});
