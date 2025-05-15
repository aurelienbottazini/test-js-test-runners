
import sum966 from '../sum966.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 10 to equal 69 + offset 0.4931644189575751', (t) => {
  assert.strictEqual(sum966(59, 10), 69 + 0.4931644189575751);
});
