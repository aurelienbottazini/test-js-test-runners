
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 22 to equal 67', () => {
  expect(sum(45, 22)).toBe(67);
});
