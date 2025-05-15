
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 96 to equal 161', () => {
  expect(sum(65, 96)).toBe(161);
});
