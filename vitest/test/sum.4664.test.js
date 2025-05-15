
import sum4664 from '../sum4664.js';
import { expect, test } from 'vitest';

test('adds 97 + 34 to equal 131 + offset 0.8766751593508461', () => {
  expect(sum4664(97, 34)).toBe(131 + 0.8766751593508461);
});
