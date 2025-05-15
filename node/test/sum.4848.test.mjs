
import sum4848 from '../sum4848.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 96 to equal 158 + offset 0.4494968827526824', (t) => {
  assert.strictEqual(sum4848(62, 96), 158 + 0.4494968827526824);
});
