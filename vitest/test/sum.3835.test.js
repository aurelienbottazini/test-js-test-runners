
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 65 to equal 145', () => {
  expect(sum(80, 65)).toBe(145);
});
