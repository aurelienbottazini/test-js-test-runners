
import sum3582 from '../sum3582.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 61 to equal 111 + offset 0.4918529245360982', (t) => {
  assert.strictEqual(sum3582(50, 61), 111 + 0.4918529245360982);
});
