
import sum595 from '../sum595.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 53 to equal 144 + offset 0.42425775656150666', (t) => {
  assert.strictEqual(sum595(91, 53), 144 + 0.42425775656150666);
});
