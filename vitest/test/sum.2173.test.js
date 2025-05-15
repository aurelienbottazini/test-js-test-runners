
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 21 to equal 31', () => {
  expect(sum(10, 21)).toBe(31);
});
