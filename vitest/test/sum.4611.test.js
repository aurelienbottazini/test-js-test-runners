
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 25 to equal 44', () => {
  expect(sum(19, 25)).toBe(44);
});
