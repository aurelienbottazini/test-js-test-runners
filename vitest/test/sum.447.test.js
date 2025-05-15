
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 2 to equal 67', () => {
  expect(sum(65, 2)).toBe(67);
});
