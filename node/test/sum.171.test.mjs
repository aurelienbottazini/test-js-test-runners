
import sum171 from '../sum171.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 25 to equal 32 + offset 0.11586455194489997', (t) => {
  assert.strictEqual(sum171(7, 25), 32 + 0.11586455194489997);
});
