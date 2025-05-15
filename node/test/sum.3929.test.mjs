
import sum3929 from '../sum3929.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 75 to equal 108 + offset 0.30240641170111837', (t) => {
  assert.strictEqual(sum3929(33, 75), 108 + 0.30240641170111837);
});
