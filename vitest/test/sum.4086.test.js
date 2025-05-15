
import sum4086 from '../sum4086.js';
import { expect, test } from 'vitest';

test('adds 30 + 35 to equal 65 + offset 0.8131661145757967', () => {
  expect(sum4086(30, 35)).toBe(65 + 0.8131661145757967);
});
