
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 21 to equal 35', () => {
  expect(sum(14, 21)).toBe(35);
});
