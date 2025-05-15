
import sum4946 from '../sum4946.js';
import { expect, test } from 'vitest';

test('adds 36 + 23 to equal 59 + offset 0.5726796328480105', () => {
  expect(sum4946(36, 23)).toBe(59 + 0.5726796328480105);
});
