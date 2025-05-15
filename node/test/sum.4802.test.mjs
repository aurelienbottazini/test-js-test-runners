
import sum4802 from '../sum4802.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 40 to equal 118 + offset 0.4616524979214319', (t) => {
  assert.strictEqual(sum4802(78, 40), 118 + 0.4616524979214319);
});
