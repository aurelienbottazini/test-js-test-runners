
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 11 to equal 99', () => {
  expect(sum(88, 11)).toBe(99);
});
