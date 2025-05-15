
import sum1252 from '../sum1252.js';
import { expect, test } from 'vitest';

test('adds 66 + 78 to equal 144 + offset 0.22561506577798018', () => {
  expect(sum1252(66, 78)).toBe(144 + 0.22561506577798018);
});
