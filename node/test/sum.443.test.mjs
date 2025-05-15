
import sum443 from '../sum443.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 60 to equal 83 + offset 0.0791384812894238', (t) => {
  assert.strictEqual(sum443(23, 60), 83 + 0.0791384812894238);
});
