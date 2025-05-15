
import sum4107 from '../sum4107.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 93 to equal 152 + offset 0.6514668315359283', (t) => {
  assert.strictEqual(sum4107(59, 93), 152 + 0.6514668315359283);
});
