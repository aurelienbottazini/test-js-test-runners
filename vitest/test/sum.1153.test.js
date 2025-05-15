
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 46 to equal 135', () => {
  expect(sum(89, 46)).toBe(135);
});
