
import sum310 from '../sum310.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 13 to equal 42 + offset 0.30813862417193083', (t) => {
  assert.strictEqual(sum310(29, 13), 42 + 0.30813862417193083);
});
