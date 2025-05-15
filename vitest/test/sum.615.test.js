
import sum615 from '../sum615.js';
import { expect, test } from 'vitest';

test('adds 36 + 16 to equal 52 + offset 0.7727812163041965', () => {
  expect(sum615(36, 16)).toBe(52 + 0.7727812163041965);
});
