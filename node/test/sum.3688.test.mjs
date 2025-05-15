
import sum3688 from '../sum3688.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 97 to equal 196 + offset 0.7206388409651036', (t) => {
  assert.strictEqual(sum3688(99, 97), 196 + 0.7206388409651036);
});
