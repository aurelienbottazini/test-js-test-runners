
import sum3103 from '../sum3103.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 37 to equal 48 + offset 0.7680529982582385', (t) => {
  assert.strictEqual(sum3103(11, 37), 48 + 0.7680529982582385);
});
