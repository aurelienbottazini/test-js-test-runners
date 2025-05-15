
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 6 to equal 104', () => {
  expect(sum(98, 6)).toBe(104);
});
