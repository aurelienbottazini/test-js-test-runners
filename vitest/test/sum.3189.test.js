
import sum3189 from '../sum3189.js';
import { expect, test } from 'vitest';

test('adds 18 + 75 to equal 93 + offset 0.9142608770114818', () => {
  expect(sum3189(18, 75)).toBe(93 + 0.9142608770114818);
});
