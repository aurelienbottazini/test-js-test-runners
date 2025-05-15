
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 46 to equal 91', () => {
  expect(sum(45, 46)).toBe(91);
});
