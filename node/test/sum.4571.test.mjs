
import sum4571 from '../sum4571.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 0 to equal 54 + offset 0.11885113444400752', (t) => {
  assert.strictEqual(sum4571(54, 0), 54 + 0.11885113444400752);
});
