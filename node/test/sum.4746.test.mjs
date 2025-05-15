
import sum4746 from '../sum4746.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 76 to equal 163 + offset 0.5973196640002195', (t) => {
  assert.strictEqual(sum4746(87, 76), 163 + 0.5973196640002195);
});
