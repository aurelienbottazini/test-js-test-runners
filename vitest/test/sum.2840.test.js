
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 96 to equal 181', () => {
  expect(sum(85, 96)).toBe(181);
});
