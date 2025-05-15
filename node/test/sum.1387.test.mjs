
import sum1387 from '../sum1387.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 99 to equal 134 + offset 0.12283405380882995', (t) => {
  assert.strictEqual(sum1387(35, 99), 134 + 0.12283405380882995);
});
