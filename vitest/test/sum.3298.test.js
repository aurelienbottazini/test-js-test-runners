
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 46 to equal 77', () => {
  expect(sum(31, 46)).toBe(77);
});
