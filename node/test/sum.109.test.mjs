
import sum109 from '../sum109.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 89 to equal 139 + offset 0.20286122962958986', (t) => {
  assert.strictEqual(sum109(50, 89), 139 + 0.20286122962958986);
});
