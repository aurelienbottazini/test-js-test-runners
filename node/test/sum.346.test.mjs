
import sum346 from '../sum346.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 47 to equal 87 + offset 0.29778851566707176', (t) => {
  assert.strictEqual(sum346(40, 47), 87 + 0.29778851566707176);
});
