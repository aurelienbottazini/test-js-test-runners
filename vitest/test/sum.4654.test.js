
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 67 to equal 147', () => {
  expect(sum(80, 67)).toBe(147);
});
