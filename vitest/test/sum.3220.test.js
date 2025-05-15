
import sum3220 from '../sum3220.js';
import { expect, test } from 'vitest';

test('adds 90 + 25 to equal 115 + offset 0.6347215229464475', () => {
  expect(sum3220(90, 25)).toBe(115 + 0.6347215229464475);
});
