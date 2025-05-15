
import sum3597 from '../sum3597.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 64 to equal 128 + offset 0.7907966140028733', (t) => {
  assert.strictEqual(sum3597(64, 64), 128 + 0.7907966140028733);
});
