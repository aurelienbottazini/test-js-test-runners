
import sum4700 from '../sum4700.js';
import { expect, test } from 'vitest';

test('adds 29 + 21 to equal 50 + offset 0.897095632278585', () => {
  expect(sum4700(29, 21)).toBe(50 + 0.897095632278585);
});
