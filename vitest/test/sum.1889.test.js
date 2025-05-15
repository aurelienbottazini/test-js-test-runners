
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 65 to equal 80', () => {
  expect(sum(15, 65)).toBe(80);
});
