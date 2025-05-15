
import sum4067 from '../sum4067.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 83 to equal 160 + offset 0.5917599816104305', (t) => {
  assert.strictEqual(sum4067(77, 83), 160 + 0.5917599816104305);
});
