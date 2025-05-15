
import sum267 from '../sum267.js';
import { expect, test } from 'vitest';

test('adds 51 + 77 to equal 128 + offset 0.8079847744351052', () => {
  expect(sum267(51, 77)).toBe(128 + 0.8079847744351052);
});
