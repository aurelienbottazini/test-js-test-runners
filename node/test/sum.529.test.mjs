
import sum529 from '../sum529.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 32 to equal 102 + offset 0.5954688158793234', (t) => {
  assert.strictEqual(sum529(70, 32), 102 + 0.5954688158793234);
});
