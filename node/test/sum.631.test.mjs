
import sum631 from '../sum631.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 58 to equal 110 + offset 0.7931638783087795', (t) => {
  assert.strictEqual(sum631(52, 58), 110 + 0.7931638783087795);
});
