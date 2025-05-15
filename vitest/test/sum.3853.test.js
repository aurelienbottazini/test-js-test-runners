
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 46 to equal 123', () => {
  expect(sum(77, 46)).toBe(123);
});
