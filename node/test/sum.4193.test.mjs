
import sum4193 from '../sum4193.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 64 to equal 73 + offset 0.029865232428910593', (t) => {
  assert.strictEqual(sum4193(9, 64), 73 + 0.029865232428910593);
});
