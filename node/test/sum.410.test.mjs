
import sum410 from '../sum410.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 9 to equal 73 + offset 0.7823637370383906', (t) => {
  assert.strictEqual(sum410(64, 9), 73 + 0.7823637370383906);
});
