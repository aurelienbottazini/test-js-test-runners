
import sum1488 from '../sum1488.js';
import { expect, test } from 'vitest';

test('adds 80 + 40 to equal 120 + offset 0.22559614334396083', () => {
  expect(sum1488(80, 40)).toBe(120 + 0.22559614334396083);
});
