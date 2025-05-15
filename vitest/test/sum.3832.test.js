
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 11 to equal 26', () => {
  expect(sum(15, 11)).toBe(26);
});
