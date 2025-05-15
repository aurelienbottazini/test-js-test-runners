
import sum4469 from '../sum4469.js';
import { expect, test } from 'vitest';

test('adds 95 + 71 to equal 166 + offset 0.027903230201735463', () => {
  expect(sum4469(95, 71)).toBe(166 + 0.027903230201735463);
});
