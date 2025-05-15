
import sum4115 from '../sum4115.js';
import { expect, test } from 'vitest';

test('adds 48 + 96 to equal 144 + offset 0.04838794802919533', () => {
  expect(sum4115(48, 96)).toBe(144 + 0.04838794802919533);
});
