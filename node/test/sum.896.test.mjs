
import sum896 from '../sum896.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 36 to equal 80 + offset 0.32727104401564533', (t) => {
  assert.strictEqual(sum896(44, 36), 80 + 0.32727104401564533);
});
