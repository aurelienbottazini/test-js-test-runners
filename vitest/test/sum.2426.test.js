
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 46 to equal 127', () => {
  expect(sum(81, 46)).toBe(127);
});
