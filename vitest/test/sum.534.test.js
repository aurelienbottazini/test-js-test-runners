
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 81 to equal 172', () => {
  expect(sum(91, 81)).toBe(172);
});
