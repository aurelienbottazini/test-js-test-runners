
import sum3476 from '../sum3476.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 59 to equal 104 + offset 0.09268199852846681', (t) => {
  assert.strictEqual(sum3476(45, 59), 104 + 0.09268199852846681);
});
