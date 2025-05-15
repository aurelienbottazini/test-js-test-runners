
import sum3255 from '../sum3255.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 95 to equal 173 + offset 0.4907821719708221', (t) => {
  assert.strictEqual(sum3255(78, 95), 173 + 0.4907821719708221);
});
