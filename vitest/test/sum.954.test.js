
import sum954 from '../sum954.js';
import { expect, test } from 'vitest';

test('adds 74 + 42 to equal 116 + offset 0.845047598196864', () => {
  expect(sum954(74, 42)).toBe(116 + 0.845047598196864);
});
