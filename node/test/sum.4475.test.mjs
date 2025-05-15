
import sum4475 from '../sum4475.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 36 to equal 126 + offset 0.906655708104961', (t) => {
  assert.strictEqual(sum4475(90, 36), 126 + 0.906655708104961);
});
