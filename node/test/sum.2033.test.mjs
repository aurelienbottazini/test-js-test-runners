
import sum2033 from '../sum2033.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 13 to equal 52 + offset 0.6782476802144707', (t) => {
  assert.strictEqual(sum2033(39, 13), 52 + 0.6782476802144707);
});
