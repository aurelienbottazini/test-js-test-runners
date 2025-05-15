
import sum4618 from '../sum4618.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 80 to equal 115 + offset 0.8274021469521697', (t) => {
  assert.strictEqual(sum4618(35, 80), 115 + 0.8274021469521697);
});
