
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 63 to equal 147', () => {
  expect(sum(84, 63)).toBe(147);
});
