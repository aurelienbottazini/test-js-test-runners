
import sum4445 from '../sum4445.js';
import { expect, test } from 'vitest';

test('adds 94 + 70 to equal 164 + offset 0.8707094916650806', () => {
  expect(sum4445(94, 70)).toBe(164 + 0.8707094916650806);
});
