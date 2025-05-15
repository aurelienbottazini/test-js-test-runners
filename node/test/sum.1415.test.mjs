
import sum1415 from '../sum1415.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 45 to equal 55 + offset 0.7065156530938346', (t) => {
  assert.strictEqual(sum1415(10, 45), 55 + 0.7065156530938346);
});
