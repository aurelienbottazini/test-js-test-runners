
import sum1049 from '../sum1049.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 58 to equal 111 + offset 0.3831151122891222', (t) => {
  assert.strictEqual(sum1049(53, 58), 111 + 0.3831151122891222);
});
