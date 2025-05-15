
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 46 to equal 112', () => {
  expect(sum(66, 46)).toBe(112);
});
