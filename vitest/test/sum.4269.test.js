
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 46 to equal 63', () => {
  expect(sum(17, 46)).toBe(63);
});
