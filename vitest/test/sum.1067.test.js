
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 96 to equal 180', () => {
  expect(sum(84, 96)).toBe(180);
});
