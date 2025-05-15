
import sum751 from '../sum751.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 60 to equal 104 + offset 0.00364433704415712', (t) => {
  assert.strictEqual(sum751(44, 60), 104 + 0.00364433704415712);
});
