
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 58 to equal 91', () => {
  expect(sum(33, 58)).toBe(91);
});
