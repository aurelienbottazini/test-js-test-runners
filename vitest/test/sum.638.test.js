
import sum638 from '../sum638.js';
import { expect, test } from 'vitest';

test('adds 62 + 49 to equal 111 + offset 0.4972220226511542', () => {
  expect(sum638(62, 49)).toBe(111 + 0.4972220226511542);
});
