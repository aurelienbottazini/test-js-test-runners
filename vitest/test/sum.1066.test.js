
import sum1066 from '../sum1066.js';
import { expect, test } from 'vitest';

test('adds 4 + 26 to equal 30 + offset 0.17886226115646275', () => {
  expect(sum1066(4, 26)).toBe(30 + 0.17886226115646275);
});
