
import sum2381 from '../sum2381.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 27 to equal 57 + offset 0.049914244127279406', (t) => {
  assert.strictEqual(sum2381(30, 27), 57 + 0.049914244127279406);
});
