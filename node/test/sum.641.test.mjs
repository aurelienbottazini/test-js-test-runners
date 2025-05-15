
import sum641 from '../sum641.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 95 to equal 100 + offset 0.9259978637229195', (t) => {
  assert.strictEqual(sum641(5, 95), 100 + 0.9259978637229195);
});
