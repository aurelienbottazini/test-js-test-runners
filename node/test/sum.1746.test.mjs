
import sum1746 from '../sum1746.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 92 to equal 117 + offset 0.6225886578275229', (t) => {
  assert.strictEqual(sum1746(25, 92), 117 + 0.6225886578275229);
});
