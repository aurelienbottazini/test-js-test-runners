
import sum689 from '../sum689.js';
import { expect, test } from 'vitest';

test('adds 84 + 21 to equal 105 + offset 0.14244375156693379', () => {
  expect(sum689(84, 21)).toBe(105 + 0.14244375156693379);
});
