
import sum276 from '../sum276.js';
import { expect, test } from 'vitest';

test('adds 73 + 21 to equal 94 + offset 0.5893790858232961', () => {
  expect(sum276(73, 21)).toBe(94 + 0.5893790858232961);
});
