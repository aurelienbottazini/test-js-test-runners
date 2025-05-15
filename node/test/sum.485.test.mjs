
import sum485 from '../sum485.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 53 to equal 119 + offset 0.9245640997562101', (t) => {
  assert.strictEqual(sum485(66, 53), 119 + 0.9245640997562101);
});
