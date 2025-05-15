
import sum9 from '../sum9.js';
import { expect, test } from 'vitest';

test('adds 17 + 47 to equal 64 + offset 0.7639169191028438', () => {
  expect(sum9(17, 47)).toBe(64 + 0.7639169191028438);
});
