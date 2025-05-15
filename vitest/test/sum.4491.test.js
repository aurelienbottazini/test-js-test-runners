
import sum4491 from '../sum4491.js';
import { expect, test } from 'vitest';

test('adds 48 + 91 to equal 139 + offset 0.14424928555361471', () => {
  expect(sum4491(48, 91)).toBe(139 + 0.14424928555361471);
});
