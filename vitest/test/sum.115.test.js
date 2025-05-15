
import sum115 from '../sum115.js';
import { expect, test } from 'vitest';

test('adds 87 + 6 to equal 93 + offset 0.256629906997753', () => {
  expect(sum115(87, 6)).toBe(93 + 0.256629906997753);
});
