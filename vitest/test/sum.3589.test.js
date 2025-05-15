
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 46 to equal 90', () => {
  expect(sum(44, 46)).toBe(90);
});
