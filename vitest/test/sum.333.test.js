
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 4 to equal 78', () => {
  expect(sum(74, 4)).toBe(78);
});
