
import sum4129 from '../sum4129.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 94 to equal 139 + offset 0.30193302407865474', (t) => {
  assert.strictEqual(sum4129(45, 94), 139 + 0.30193302407865474);
});
