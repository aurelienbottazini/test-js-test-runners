
import sum3016 from '../sum3016.js';
import { expect, test } from 'vitest';

test('adds 84 + 30 to equal 114 + offset 0.026289654902666992', () => {
  expect(sum3016(84, 30)).toBe(114 + 0.026289654902666992);
});
