
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 2 to equal 19', () => {
  expect(sum(17, 2)).toBe(19);
});
