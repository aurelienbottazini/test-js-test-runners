
import sum4437 from '../sum4437.js';
import { expect, test } from 'vitest';

test('adds 64 + 57 to equal 121 + offset 0.12425997107096265', () => {
  expect(sum4437(64, 57)).toBe(121 + 0.12425997107096265);
});
