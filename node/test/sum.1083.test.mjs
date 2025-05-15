
import sum1083 from '../sum1083.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 17 to equal 59 + offset 0.4484052906580597', (t) => {
  assert.strictEqual(sum1083(42, 17), 59 + 0.4484052906580597);
});
