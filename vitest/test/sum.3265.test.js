
import sum3265 from '../sum3265.js';
import { expect, test } from 'vitest';

test('adds 96 + 42 to equal 138 + offset 0.33978626680981006', () => {
  expect(sum3265(96, 42)).toBe(138 + 0.33978626680981006);
});
