
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 10 to equal 62', () => {
  expect(sum(52, 10)).toBe(62);
});
