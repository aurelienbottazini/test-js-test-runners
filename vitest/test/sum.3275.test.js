
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 66 to equal 150', () => {
  expect(sum(84, 66)).toBe(150);
});
