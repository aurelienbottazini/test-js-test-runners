
import sum578 from '../sum578.js';
import { expect, test } from 'vitest';

test('adds 51 + 91 to equal 142 + offset 0.7525397135244508', () => {
  expect(sum578(51, 91)).toBe(142 + 0.7525397135244508);
});
