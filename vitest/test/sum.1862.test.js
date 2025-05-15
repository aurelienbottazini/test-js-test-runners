
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 65 to equal 110', () => {
  expect(sum(45, 65)).toBe(110);
});
