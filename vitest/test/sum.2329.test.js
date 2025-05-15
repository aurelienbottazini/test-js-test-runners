
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 46 to equal 64', () => {
  expect(sum(18, 46)).toBe(64);
});
