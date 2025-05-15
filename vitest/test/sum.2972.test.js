
import sum2972 from '../sum2972.js';
import { expect, test } from 'vitest';

test('adds 65 + 62 to equal 127 + offset 0.11086572161321095', () => {
  expect(sum2972(65, 62)).toBe(127 + 0.11086572161321095);
});
