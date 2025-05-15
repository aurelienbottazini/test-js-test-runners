
import sum3129 from '../sum3129.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 72 to equal 154 + offset 0.33447578228525876', (t) => {
  assert.strictEqual(sum3129(82, 72), 154 + 0.33447578228525876);
});
