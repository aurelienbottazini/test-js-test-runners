
import sum618 from '../sum618.js';
import { expect, test } from 'vitest';

test('adds 97 + 57 to equal 154 + offset 0.3018744171288915', () => {
  expect(sum618(97, 57)).toBe(154 + 0.3018744171288915);
});
