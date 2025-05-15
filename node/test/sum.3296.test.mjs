
import sum3296 from '../sum3296.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 95 to equal 193 + offset 0.5523913514504623', (t) => {
  assert.strictEqual(sum3296(98, 95), 193 + 0.5523913514504623);
});
