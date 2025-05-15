
import sum2399 from '../sum2399.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 82 to equal 104 + offset 0.11307489247639424', (t) => {
  assert.strictEqual(sum2399(22, 82), 104 + 0.11307489247639424);
});
