
import sum890 from '../sum890.js';
import { expect, test } from 'vitest';

test('adds 27 + 37 to equal 64 + offset 0.57756944957287', () => {
  expect(sum890(27, 37)).toBe(64 + 0.57756944957287);
});
