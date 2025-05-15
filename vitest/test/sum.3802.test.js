
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 46 to equal 117', () => {
  expect(sum(71, 46)).toBe(117);
});
