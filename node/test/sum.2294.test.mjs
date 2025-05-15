
import sum2294 from '../sum2294.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 21 to equal 95 + offset 0.5891664175453037', (t) => {
  assert.strictEqual(sum2294(74, 21), 95 + 0.5891664175453037);
});
