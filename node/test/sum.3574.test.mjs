
import sum3574 from '../sum3574.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 47 to equal 82 + offset 0.7409287237947699', (t) => {
  assert.strictEqual(sum3574(35, 47), 82 + 0.7409287237947699);
});
