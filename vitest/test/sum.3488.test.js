
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 4 to equal 19', () => {
  expect(sum(15, 4)).toBe(19);
});
