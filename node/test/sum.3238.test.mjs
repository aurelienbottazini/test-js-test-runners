
import sum3238 from '../sum3238.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 88 to equal 157 + offset 0.06005672928244099', (t) => {
  assert.strictEqual(sum3238(69, 88), 157 + 0.06005672928244099);
});
