
import sum4742 from '../sum4742.js';
import { expect, test } from 'vitest';

test('adds 85 + 61 to equal 146 + offset 0.5738822023992471', () => {
  expect(sum4742(85, 61)).toBe(146 + 0.5738822023992471);
});
