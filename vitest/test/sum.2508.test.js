
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 46 to equal 88', () => {
  expect(sum(42, 46)).toBe(88);
});
