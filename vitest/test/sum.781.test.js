
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 46 to equal 74', () => {
  expect(sum(28, 46)).toBe(74);
});
