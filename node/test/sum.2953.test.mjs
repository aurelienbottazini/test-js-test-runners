
import sum2953 from '../sum2953.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 62 to equal 145 + offset 0.8601831986865863', (t) => {
  assert.strictEqual(sum2953(83, 62), 145 + 0.8601831986865863);
});
