
import sum104 from '../sum104.js';
import { expect, test } from 'vitest';

test('adds 13 + 74 to equal 87 + offset 0.7868248620677409', () => {
  expect(sum104(13, 74)).toBe(87 + 0.7868248620677409);
});
