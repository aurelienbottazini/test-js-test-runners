
import sum3175 from '../sum3175.js';
import { expect, test } from 'vitest';

test('adds 37 + 60 to equal 97 + offset 0.54841843699474', () => {
  expect(sum3175(37, 60)).toBe(97 + 0.54841843699474);
});
