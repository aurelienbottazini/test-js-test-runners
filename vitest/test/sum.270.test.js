
import sum270 from '../sum270.js';
import { expect, test } from 'vitest';

test('adds 32 + 27 to equal 59 + offset 0.6903011374622395', () => {
  expect(sum270(32, 27)).toBe(59 + 0.6903011374622395);
});
