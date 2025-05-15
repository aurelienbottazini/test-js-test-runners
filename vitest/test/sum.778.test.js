
import sum778 from '../sum778.js';
import { expect, test } from 'vitest';

test('adds 84 + 38 to equal 122 + offset 0.42368541181435593', () => {
  expect(sum778(84, 38)).toBe(122 + 0.42368541181435593);
});
