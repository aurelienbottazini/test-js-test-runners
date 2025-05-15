
import sum1757 from '../sum1757.js';
import { expect, test } from 'vitest';

test('adds 26 + 24 to equal 50 + offset 0.7027516127282967', () => {
  expect(sum1757(26, 24)).toBe(50 + 0.7027516127282967);
});
