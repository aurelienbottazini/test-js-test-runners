
import sum4841 from '../sum4841.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 89 to equal 179 + offset 0.7915211670053058', (t) => {
  assert.strictEqual(sum4841(90, 89), 179 + 0.7915211670053058);
});
