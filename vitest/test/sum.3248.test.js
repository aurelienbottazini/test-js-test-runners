
import sum3248 from '../sum3248.js';
import { expect, test } from 'vitest';

test('adds 80 + 30 to equal 110 + offset 0.9178391000889224', () => {
  expect(sum3248(80, 30)).toBe(110 + 0.9178391000889224);
});
