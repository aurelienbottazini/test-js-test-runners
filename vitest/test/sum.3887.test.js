
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 9 to equal 15', () => {
  expect(sum(6, 9)).toBe(15);
});
