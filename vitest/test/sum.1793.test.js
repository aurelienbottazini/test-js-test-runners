
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 40 to equal 106', () => {
  expect(sum(66, 40)).toBe(106);
});
