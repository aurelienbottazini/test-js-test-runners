
import sum4663 from '../sum4663.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 93 to equal 143 + offset 0.06908959116546642', (t) => {
  assert.strictEqual(sum4663(50, 93), 143 + 0.06908959116546642);
});
