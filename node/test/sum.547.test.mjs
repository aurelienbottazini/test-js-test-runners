
import sum547 from '../sum547.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 74 to equal 93 + offset 0.4904247461196619', (t) => {
  assert.strictEqual(sum547(19, 74), 93 + 0.4904247461196619);
});
