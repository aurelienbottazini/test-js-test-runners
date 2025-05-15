
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 65 to equal 67', () => {
  expect(sum(2, 65)).toBe(67);
});
