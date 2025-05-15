
import sum922 from '../sum922.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 3 to equal 25 + offset 0.3426526328841554', (t) => {
  assert.strictEqual(sum922(22, 3), 25 + 0.3426526328841554);
});
