
import sum2022 from '../sum2022.js';
import { expect, test } from 'vitest';

test('adds 80 + 34 to equal 114 + offset 0.8382962062665574', () => {
  expect(sum2022(80, 34)).toBe(114 + 0.8382962062665574);
});
