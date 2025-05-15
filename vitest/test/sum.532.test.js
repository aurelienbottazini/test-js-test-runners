
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 21 to equal 26', () => {
  expect(sum(5, 21)).toBe(26);
});
