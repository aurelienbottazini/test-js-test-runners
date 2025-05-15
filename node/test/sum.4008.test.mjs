
import sum4008 from '../sum4008.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 72 to equal 75 + offset 0.5790465057770676', (t) => {
  assert.strictEqual(sum4008(3, 72), 75 + 0.5790465057770676);
});
