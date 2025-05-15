
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 4 to equal 15', () => {
  expect(sum(11, 4)).toBe(15);
});
