
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 97 to equal 172', () => {
  expect(sum(75, 97)).toBe(172);
});
