
import sum4126 from '../sum4126.js';
import { expect, test } from 'vitest';

test('adds 58 + 15 to equal 73 + offset 0.061710088182618916', () => {
  expect(sum4126(58, 15)).toBe(73 + 0.061710088182618916);
});
