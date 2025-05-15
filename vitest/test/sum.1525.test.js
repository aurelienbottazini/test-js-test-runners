
import sum1525 from '../sum1525.js';
import { expect, test } from 'vitest';

test('adds 60 + 41 to equal 101 + offset 0.902100453739629', () => {
  expect(sum1525(60, 41)).toBe(101 + 0.902100453739629);
});
