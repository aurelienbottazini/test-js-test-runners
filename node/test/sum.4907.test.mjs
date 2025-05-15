
import sum4907 from '../sum4907.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 19 to equal 36 + offset 0.8856337061936083', (t) => {
  assert.strictEqual(sum4907(17, 19), 36 + 0.8856337061936083);
});
