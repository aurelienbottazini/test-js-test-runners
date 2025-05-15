
import sum648 from '../sum648.js';
import { expect, test } from 'vitest';

test('adds 3 + 26 to equal 29 + offset 0.8953911881405235', () => {
  expect(sum648(3, 26)).toBe(29 + 0.8953911881405235);
});
