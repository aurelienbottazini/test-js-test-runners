
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 46 to equal 86', () => {
  expect(sum(40, 46)).toBe(86);
});
