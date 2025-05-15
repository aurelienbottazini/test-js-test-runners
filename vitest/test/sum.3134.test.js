
import sum3134 from '../sum3134.js';
import { expect, test } from 'vitest';

test('adds 94 + 42 to equal 136 + offset 0.9287787010417584', () => {
  expect(sum3134(94, 42)).toBe(136 + 0.9287787010417584);
});
