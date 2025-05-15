
import sum4758 from '../sum4758.js';
import { expect, test } from 'vitest';

test('adds 84 + 71 to equal 155 + offset 0.19802360129077878', () => {
  expect(sum4758(84, 71)).toBe(155 + 0.19802360129077878);
});
