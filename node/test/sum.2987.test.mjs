
import sum2987 from '../sum2987.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 76 to equal 110 + offset 0.06009251867442733', (t) => {
  assert.strictEqual(sum2987(34, 76), 110 + 0.06009251867442733);
});
