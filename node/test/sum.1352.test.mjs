
import sum1352 from '../sum1352.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 2 to equal 59 + offset 0.8206105558789631', (t) => {
  assert.strictEqual(sum1352(57, 2), 59 + 0.8206105558789631);
});
