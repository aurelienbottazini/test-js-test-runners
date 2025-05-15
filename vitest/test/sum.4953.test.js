
import sum4953 from '../sum4953.js';
import { expect, test } from 'vitest';

test('adds 54 + 30 to equal 84 + offset 0.5584938867091425', () => {
  expect(sum4953(54, 30)).toBe(84 + 0.5584938867091425);
});
