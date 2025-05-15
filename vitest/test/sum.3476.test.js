
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 96 to equal 141', () => {
  expect(sum(45, 96)).toBe(141);
});
