
import sum257 from '../sum257.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 47 to equal 58 + offset 0.48382116812090126', (t) => {
  assert.strictEqual(sum257(11, 47), 58 + 0.48382116812090126);
});
