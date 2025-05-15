
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 21 to equal 47', () => {
  expect(sum(26, 21)).toBe(47);
});
