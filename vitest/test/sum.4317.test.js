
import sum4317 from '../sum4317.js';
import { expect, test } from 'vitest';

test('adds 92 + 71 to equal 163 + offset 0.978817776005432', () => {
  expect(sum4317(92, 71)).toBe(163 + 0.978817776005432);
});
