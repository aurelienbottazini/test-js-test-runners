
import sum2734 from '../sum2734.js';
import { expect, test } from 'vitest';

test('adds 84 + 97 to equal 181 + offset 0.9437016081224127', () => {
  expect(sum2734(84, 97)).toBe(181 + 0.9437016081224127);
});
