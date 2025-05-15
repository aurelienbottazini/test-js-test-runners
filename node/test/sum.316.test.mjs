
import sum316 from '../sum316.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 63 to equal 74 + offset 0.1703613498421901', (t) => {
  assert.strictEqual(sum316(11, 63), 74 + 0.1703613498421901);
});
