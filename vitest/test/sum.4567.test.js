
import sum4567 from '../sum4567.js';
import { expect, test } from 'vitest';

test('adds 48 + 78 to equal 126 + offset 0.5055102347253488', () => {
  expect(sum4567(48, 78)).toBe(126 + 0.5055102347253488);
});
