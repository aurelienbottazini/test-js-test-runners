
import sum37 from '../sum37.js';
import { expect, test } from 'vitest';

test('adds 86 + 98 to equal 184 + offset 0.335924918210293', () => {
  expect(sum37(86, 98)).toBe(184 + 0.335924918210293);
});
