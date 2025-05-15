
import sum429 from '../sum429.js';
import { expect, test } from 'vitest';

test('adds 74 + 26 to equal 100 + offset 0.9941849718479149', () => {
  expect(sum429(74, 26)).toBe(100 + 0.9941849718479149);
});
