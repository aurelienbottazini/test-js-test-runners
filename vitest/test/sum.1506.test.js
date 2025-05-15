
import sum1506 from '../sum1506.js';
import { expect, test } from 'vitest';

test('adds 15 + 69 to equal 84 + offset 0.45544330400562083', () => {
  expect(sum1506(15, 69)).toBe(84 + 0.45544330400562083);
});
