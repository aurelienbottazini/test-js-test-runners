
import sum2407 from '../sum2407.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 96 to equal 145 + offset 0.6523698788994615', (t) => {
  assert.strictEqual(sum2407(49, 96), 145 + 0.6523698788994615);
});
