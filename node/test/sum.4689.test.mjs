
import sum4689 from '../sum4689.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 85 to equal 173 + offset 0.7887583910338474', (t) => {
  assert.strictEqual(sum4689(88, 85), 173 + 0.7887583910338474);
});
