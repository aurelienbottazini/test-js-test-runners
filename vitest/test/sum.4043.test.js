
import sum4043 from '../sum4043.js';
import { expect, test } from 'vitest';

test('adds 74 + 53 to equal 127 + offset 0.5516665852018076', () => {
  expect(sum4043(74, 53)).toBe(127 + 0.5516665852018076);
});
