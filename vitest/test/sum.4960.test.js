
import sum4960 from '../sum4960.js';
import { expect, test } from 'vitest';

test('adds 84 + 70 to equal 154 + offset 0.1436908582227162', () => {
  expect(sum4960(84, 70)).toBe(154 + 0.1436908582227162);
});
