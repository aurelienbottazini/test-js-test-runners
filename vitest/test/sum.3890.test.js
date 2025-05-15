
import sum3890 from '../sum3890.js';
import { expect, test } from 'vitest';

test('adds 81 + 13 to equal 94 + offset 0.7043173733115983', () => {
  expect(sum3890(81, 13)).toBe(94 + 0.7043173733115983);
});
