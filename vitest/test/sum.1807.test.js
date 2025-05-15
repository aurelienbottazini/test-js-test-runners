
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 22 to equal 26', () => {
  expect(sum(4, 22)).toBe(26);
});
