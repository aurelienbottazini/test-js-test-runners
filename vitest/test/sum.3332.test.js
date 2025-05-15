
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 46 to equal 67', () => {
  expect(sum(21, 46)).toBe(67);
});
