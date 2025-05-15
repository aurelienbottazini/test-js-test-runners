
import sum306 from '../sum306.js';
import { expect, test } from 'vitest';

test('adds 65 + 28 to equal 93 + offset 0.946998013438593', () => {
  expect(sum306(65, 28)).toBe(93 + 0.946998013438593);
});
