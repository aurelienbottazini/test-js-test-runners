
import sum2744 from '../sum2744.js';
import { expect, test } from 'vitest';

test('adds 11 + 51 to equal 62 + offset 0.6821269036809398', () => {
  expect(sum2744(11, 51)).toBe(62 + 0.6821269036809398);
});
