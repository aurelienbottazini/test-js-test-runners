
import sum94 from '../sum94.js';
import { expect, test } from 'vitest';

test('adds 13 + 93 to equal 106 + offset 0.7361835778193011', () => {
  expect(sum94(13, 93)).toBe(106 + 0.7361835778193011);
});
