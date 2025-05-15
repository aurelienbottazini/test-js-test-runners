
import sum460 from '../sum460.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 97 to equal 194 + offset 0.22136536054016853', (t) => {
  assert.strictEqual(sum460(97, 97), 194 + 0.22136536054016853);
});
