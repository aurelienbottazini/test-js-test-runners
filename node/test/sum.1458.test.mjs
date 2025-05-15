
import sum1458 from '../sum1458.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 76 to equal 111 + offset 0.21170636218814998', (t) => {
  assert.strictEqual(sum1458(35, 76), 111 + 0.21170636218814998);
});
