
import sum158 from '../sum158.js';
import { expect, test } from 'vitest';

test('adds 49 + 67 to equal 116 + offset 0.2389116200467717', () => {
  expect(sum158(49, 67)).toBe(116 + 0.2389116200467717);
});
