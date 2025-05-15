
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 33 to equal 85', () => {
  expect(sum(52, 33)).toBe(85);
});
