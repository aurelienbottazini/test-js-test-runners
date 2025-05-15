
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 67 to equal 119', () => {
  expect(sum(52, 67)).toBe(119);
});
