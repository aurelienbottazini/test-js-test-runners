
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 58 to equal 78', () => {
  expect(sum(20, 58)).toBe(78);
});
