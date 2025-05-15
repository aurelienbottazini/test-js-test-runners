
import sum4400 from '../sum4400.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 23 to equal 65 + offset 0.4448310317862858', (t) => {
  assert.strictEqual(sum4400(42, 23), 65 + 0.4448310317862858);
});
