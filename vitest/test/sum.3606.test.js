
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 46 to equal 57', () => {
  expect(sum(11, 46)).toBe(57);
});
