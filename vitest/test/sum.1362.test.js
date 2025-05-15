
import sum1362 from '../sum1362.js';
import { expect, test } from 'vitest';

test('adds 39 + 69 to equal 108 + offset 0.12348315545397104', () => {
  expect(sum1362(39, 69)).toBe(108 + 0.12348315545397104);
});
