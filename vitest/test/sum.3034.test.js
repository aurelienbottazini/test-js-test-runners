
import sum3034 from '../sum3034.js';
import { expect, test } from 'vitest';

test('adds 91 + 29 to equal 120 + offset 0.4971155942299088', () => {
  expect(sum3034(91, 29)).toBe(120 + 0.4971155942299088);
});
