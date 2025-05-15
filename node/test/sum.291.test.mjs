
import sum291 from '../sum291.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 40 to equal 90 + offset 0.5044194939396116', (t) => {
  assert.strictEqual(sum291(50, 40), 90 + 0.5044194939396116);
});
