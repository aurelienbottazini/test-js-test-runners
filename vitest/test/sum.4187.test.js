
import sum4187 from '../sum4187.js';
import { expect, test } from 'vitest';

test('adds 27 + 85 to equal 112 + offset 0.5297892220040953', () => {
  expect(sum4187(27, 85)).toBe(112 + 0.5297892220040953);
});
