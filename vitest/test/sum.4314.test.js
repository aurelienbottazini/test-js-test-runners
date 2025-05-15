
import sum4314 from '../sum4314.js';
import { expect, test } from 'vitest';

test('adds 47 + 83 to equal 130 + offset 0.36456238540186614', () => {
  expect(sum4314(47, 83)).toBe(130 + 0.36456238540186614);
});
