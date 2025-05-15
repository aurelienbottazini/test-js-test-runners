
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 58 to equal 112', () => {
  expect(sum(54, 58)).toBe(112);
});
