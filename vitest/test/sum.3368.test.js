
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 46 to equal 65', () => {
  expect(sum(19, 46)).toBe(65);
});
