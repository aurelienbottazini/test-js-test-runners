
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 46 to equal 95', () => {
  expect(sum(49, 46)).toBe(95);
});
