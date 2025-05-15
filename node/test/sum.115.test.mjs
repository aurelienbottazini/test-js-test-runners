
import sum115 from '../sum115.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 39 to equal 114 + offset 0.802479317300925', (t) => {
  assert.strictEqual(sum115(75, 39), 114 + 0.802479317300925);
});
