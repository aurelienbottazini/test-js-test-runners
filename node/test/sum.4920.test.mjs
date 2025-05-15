
import sum4920 from '../sum4920.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 42 to equal 47 + offset 0.9776013618336173', (t) => {
  assert.strictEqual(sum4920(5, 42), 47 + 0.9776013618336173);
});
