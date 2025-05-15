
import sum1507 from '../sum1507.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 14 to equal 94 + offset 0.9575165646094865', (t) => {
  assert.strictEqual(sum1507(80, 14), 94 + 0.9575165646094865);
});
