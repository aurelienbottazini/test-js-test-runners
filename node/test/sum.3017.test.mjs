
import sum3017 from '../sum3017.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 66 to equal 95 + offset 0.009893165886838196', (t) => {
  assert.strictEqual(sum3017(29, 66), 95 + 0.009893165886838196);
});
