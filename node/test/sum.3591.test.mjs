
import sum3591 from '../sum3591.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 17 to equal 62 + offset 0.9235907430516386', (t) => {
  assert.strictEqual(sum3591(45, 17), 62 + 0.9235907430516386);
});
